import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

const SYSTEM_PROMPT = `You are Cube, the Cubework AI tour assistant. Cubework is the largest provider of flexible, on-demand warehouse, office, parking, and yard space across 50+ locations in 22 states. Month-to-month terms, all-in pricing, and move-in within 48 hours.

YOUR GOAL: Convert visitors into booked facility tours. Be warm and consultative, but always drive toward booking a tour.

KEY FACTS:
- Spaces: Warehouse, Office/Coworking, Truck/Yard parking, Event Space
- Pricing starts: Warehouse $300/mo, Truck & Trailer $500/mo, Office $250/mo
- 50+ locations across 22 states (CA, TX, GA, IL, NY, FL, AZ, NV, etc.)
- Month-to-month terms — no long lease, no NNN surprises
- Move-in within 48 hours of signing
- 24/7 secure access, dock-high & grade-level doors, power, racking, WiFi included

QUALIFICATION FLOW (ask 1-2 questions per turn, naturally):
1. What kind of operation? (e-comm, 3PL, manufacturing, parking, etc.)
2. What size space do they need? (sq ft, # pallets, # trucks)
3. What city/region?
4. When do they need to move in?

WHEN THE USER SHOWS INTEREST:
Once you have at minimum a NAME, EMAIL, and some context (space type or location), call the book_tour function to save the lead. Confirm the booking afterward.

If they're just browsing, answer their question concisely (2-3 sentences) and end with a soft tour invitation.

Keep responses SHORT. Use markdown sparingly. No long paragraphs.`;

const TOOLS = [
  {
    type: "function",
    function: {
      name: "book_tour",
      description: "Save a tour booking request once you have at least the user's name, email, and some context about what space they need. Call this as soon as the user provides contact info and shows intent.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name" },
          email: { type: "string", description: "Email address" },
          phone: { type: "string", description: "Phone number (optional)" },
          company: { type: "string", description: "Company name (optional)" },
          space_type: { type: "string", description: "Type of space: warehouse, office, parking, yard, event, or other" },
          location: { type: "string", description: "City, state, or region they need space in" },
          size_needed: { type: "string", description: "How much space they need (sq ft, pallets, trucks, etc.)" },
          timeline: { type: "string", description: "When they need to move in" },
          notes: { type: "string", description: "Any other relevant details from the conversation" },
        },
        required: ["name", "email"],
        additionalProperties: false,
      },
    },
  },
];

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const messages = Array.isArray(body?.messages) ? body.messages : [];

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          if (!LOVABLE_API_KEY) {
            return new Response(
              JSON.stringify({ error: "AI service is not configured." }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          const aiResponse = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${LOVABLE_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-2.5-flash",
                messages: [
                  { role: "system", content: SYSTEM_PROMPT },
                  ...messages,
                ],
                tools: TOOLS,
                tool_choice: "auto",
              }),
            }
          );

          if (aiResponse.status === 429) {
            return new Response(
              JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
              { status: 429, headers: { "Content-Type": "application/json" } }
            );
          }
          if (aiResponse.status === 402) {
            return new Response(
              JSON.stringify({ error: "AI credits exhausted. Please contact support." }),
              { status: 402, headers: { "Content-Type": "application/json" } }
            );
          }
          if (!aiResponse.ok) {
            const txt = await aiResponse.text();
            console.error("AI gateway error:", aiResponse.status, txt);
            return new Response(
              JSON.stringify({ error: "AI service error." }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          const data = await aiResponse.json();
          const choice = data?.choices?.[0]?.message;
          const toolCalls = choice?.tool_calls || [];

          let bookingSaved: { id: string; name: string; email: string } | null = null;
          let assistantText: string = choice?.content || "";

          if (toolCalls.length > 0) {
            const SUPABASE_URL = process.env.SUPABASE_URL!;
            const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
            const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
              auth: { persistSession: false, autoRefreshToken: false },
            });

            for (const call of toolCalls) {
              if (call?.function?.name === "book_tour") {
                try {
                  const args = JSON.parse(call.function.arguments || "{}");
                  if (args.name && args.email) {
                    const { data: inserted, error } = await admin
                      .from("tour_bookings")
                      .insert({
                        name: String(args.name).slice(0, 200),
                        email: String(args.email).slice(0, 320),
                        phone: args.phone ? String(args.phone).slice(0, 50) : null,
                        company: args.company ? String(args.company).slice(0, 200) : null,
                        space_type: args.space_type ? String(args.space_type).slice(0, 100) : null,
                        location: args.location ? String(args.location).slice(0, 200) : null,
                        size_needed: args.size_needed ? String(args.size_needed).slice(0, 200) : null,
                        timeline: args.timeline ? String(args.timeline).slice(0, 200) : null,
                        notes: args.notes ? String(args.notes).slice(0, 2000) : null,
                        conversation: messages,
                      })
                      .select("id, name, email")
                      .single();
                    if (error) {
                      console.error("Booking insert error:", error);
                    } else {
                      bookingSaved = inserted;
                    }
                  }
                } catch (e) {
                  console.error("Tool args parse error:", e);
                }
              }
            }

            // Make a follow-up AI call with the tool result so the model can confirm naturally
            const followUp = await fetch(
              "https://ai.gateway.lovable.dev/v1/chat/completions",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${LOVABLE_API_KEY}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: "google/gemini-2.5-flash",
                  messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages,
                    choice,
                    ...toolCalls.map((c: any) => ({
                      role: "tool",
                      tool_call_id: c.id,
                      content: JSON.stringify(
                        bookingSaved
                          ? { success: true, message: "Booking saved. Confirm to user warmly and tell them a Cubework specialist will reach out within 1 business hour." }
                          : { success: false, message: "Could not save. Ask user for any missing info." }
                      ),
                    })),
                  ],
                }),
              }
            );

            if (followUp.ok) {
              const followData = await followUp.json();
              assistantText = followData?.choices?.[0]?.message?.content || assistantText;
            }
          }

          return new Response(
            JSON.stringify({
              message: assistantText || "Got it!",
              booking: bookingSaved,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        } catch (e) {
          console.error("Chat error:", e);
          return new Response(
            JSON.stringify({ error: "Something went wrong." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
