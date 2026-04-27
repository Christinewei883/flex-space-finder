import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL_GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! 👋 I'm Cube, your Cubework tour assistant. I can help you find flexible warehouse, office, or parking space — and book a tour. What kind of operation are you running?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data?.error || "Sorry, something went wrong. Try again?" },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
        if (data?.booking?.id) setBookingId(data.booking.id);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network hiccup. Mind trying that again?" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-[0_18px_40px_-12px_rgba(106,201,116,0.55)] transition-all hover:-translate-y-0.5 hover:bg-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 lg:bottom-8 lg:right-8"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-light opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-light" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="animate-fade-in fixed bottom-24 right-4 z-50 flex h-[min(640px,calc(100vh-7rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-navy/20 lg:right-8">
          {/* Header */}
          <div className="flex items-center gap-3 bg-navy-dark px-5 py-4 text-white">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green font-display text-sm font-extrabold">
              C
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-navy-dark bg-green-light" />
            </div>
            <div className="flex-1">
              <div className="font-display text-sm font-bold uppercase tracking-wider">
                Cube · Tour Assistant
              </div>
              <div className="text-[11px] text-white/60">Online · Replies instantly</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-white/60 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-secondary/50 px-4 py-5"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-navy text-white"
                      : "rounded-bl-sm bg-white text-navy/90 shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-green" />
                  <span className="text-xs text-navy/50">Cube is typing…</span>
                </div>
              </div>
            )}
            {bookingId && (
              <div className="mx-auto max-w-[90%] rounded-lg border border-green/30 bg-green/10 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wider text-green-dark">
                ✓ Tour request saved · Ref #{bookingId.slice(0, 8)}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Ask about spaces, pricing, or book a tour…"
                disabled={loading}
                className="flex-1 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-green/20 disabled:opacity-60"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green text-white transition-all hover:bg-green-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] text-navy/40">
              Powered by Cubework AI · Free tour, no commitment
            </div>
          </div>
        </div>
      )}
    </>
  );
}
