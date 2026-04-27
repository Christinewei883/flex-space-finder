
DROP POLICY "Anyone can create tour bookings" ON public.tour_bookings;

CREATE POLICY "Public can submit valid tour bookings"
ON public.tour_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) > 0 AND length(name) <= 200
  AND length(email) > 3 AND length(email) <= 320
  AND email LIKE '%_@_%.__%'
);
