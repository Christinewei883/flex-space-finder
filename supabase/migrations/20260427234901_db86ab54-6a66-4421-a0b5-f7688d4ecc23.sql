
CREATE TABLE public.tour_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  space_type TEXT,
  location TEXT,
  size_needed TEXT,
  timeline TEXT,
  notes TEXT,
  conversation JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.tour_bookings ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous) can submit a tour booking
CREATE POLICY "Anyone can create tour bookings"
ON public.tour_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view (admin viewing later); we'll restrict further if roles are added
CREATE POLICY "Authenticated users can view bookings"
ON public.tour_bookings
FOR SELECT
TO authenticated
USING (true);
