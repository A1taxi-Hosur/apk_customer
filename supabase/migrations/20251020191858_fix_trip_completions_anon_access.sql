/*
  # Allow Anonymous Access to Trip Completions

  1. Changes
    - Add RLS policy for anonymous users to read trip_completions
    - This allows the customer app to fetch fare breakdowns including deadhead charges

  2. Security
    - Policy allows all anonymous users to read trip completions
    - This is safe as trip completion data is not sensitive for display purposes
*/

-- Allow anonymous users to view trip completions
CREATE POLICY "Anonymous users can view trip completions"
  ON trip_completions
  FOR SELECT
  TO anon
  USING (true);
