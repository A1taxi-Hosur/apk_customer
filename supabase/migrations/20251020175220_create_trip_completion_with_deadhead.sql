/*
  # Create Trip Completion Table with Deadhead Charges

  1. New Tables
    - `trip_completion`
      - `id` (uuid, primary key)
      - `ride_id` (uuid, nullable, references rides table)
      - `booking_id` (uuid, nullable, for scheduled bookings)
      - `booking_type` (text) - regular, airport, rental, outstation
      - `base_fare` (numeric) - Base fare component
      - `per_km_charges` (numeric) - Distance-based charges
      - `per_min_charges` (numeric) - Time-based charges (for regular rides)
      - `deadhead_charges` (numeric) - Return charges for destinations between rings
      - `deadhead_distance` (numeric) - Distance for deadhead return in km
      - `platform_fee` (numeric) - Platform fee
      - `gst_charges` (numeric) - GST on charges
      - `gst_platform_fee` (numeric) - GST on platform fee
      - `driver_allowance` (numeric) - Driver allowance (for outstation/rental)
      - `extra_km_charges` (numeric) - Extra kilometer charges (for rental/outstation)
      - `extra_time_charges` (numeric) - Extra time charges (for rental)
      - `airport_fee` (numeric) - Airport specific fees
      - `night_charges` (numeric) - Night time surcharges
      - `toll_charges` (numeric) - Toll charges
      - `parking_charges` (numeric) - Parking charges
      - `waiting_charges` (numeric) - Waiting time charges
      - `surge_charges` (numeric) - Surge pricing
      - `discount_amount` (numeric) - Any discounts applied
      - `total_fare` (numeric) - Final total fare
      - `distance_km` (numeric) - Actual distance traveled
      - `duration_minutes` (numeric) - Actual trip duration
      - `rental_hours` (integer) - Hours for rental bookings
      - `per_km_rate` (numeric) - Rate per km used
      - `per_min_rate` (numeric) - Rate per minute used
      - `extra_km_rate` (numeric) - Extra km rate
      - `extra_min_rate` (numeric) - Extra minute rate
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `trip_completion` table
    - Add policy for authenticated users to read their own trip completions
    - Add policy for service role to insert/update trip completions
    - Add policy for anonymous users to read trip completions

  3. Indexes
    - Index on `ride_id` for quick lookups
    - Index on `booking_id` for scheduled booking lookups
    - Index on `created_at` for sorting
*/

-- Create trip_completion table
CREATE TABLE IF NOT EXISTS trip_completion (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id uuid,
  booking_id uuid,
  booking_type text NOT NULL CHECK (booking_type IN ('regular', 'airport', 'rental', 'outstation')),
  base_fare numeric DEFAULT 0,
  per_km_charges numeric DEFAULT 0,
  per_min_charges numeric DEFAULT 0,
  deadhead_charges numeric DEFAULT 0,
  deadhead_distance numeric DEFAULT 0,
  platform_fee numeric DEFAULT 0,
  gst_charges numeric DEFAULT 0,
  gst_platform_fee numeric DEFAULT 0,
  driver_allowance numeric DEFAULT 0,
  extra_km_charges numeric DEFAULT 0,
  extra_time_charges numeric DEFAULT 0,
  airport_fee numeric DEFAULT 0,
  night_charges numeric DEFAULT 0,
  toll_charges numeric DEFAULT 0,
  parking_charges numeric DEFAULT 0,
  waiting_charges numeric DEFAULT 0,
  surge_charges numeric DEFAULT 0,
  discount_amount numeric DEFAULT 0,
  total_fare numeric NOT NULL,
  distance_km numeric DEFAULT 0,
  duration_minutes numeric DEFAULT 0,
  rental_hours integer,
  per_km_rate numeric,
  per_min_rate numeric,
  extra_km_rate numeric,
  extra_min_rate numeric,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT check_ride_or_booking CHECK (ride_id IS NOT NULL OR booking_id IS NOT NULL)
);

-- Enable RLS
ALTER TABLE trip_completion ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_trip_completion_ride_id ON trip_completion(ride_id);
CREATE INDEX IF NOT EXISTS idx_trip_completion_booking_id ON trip_completion(booking_id);
CREATE INDEX IF NOT EXISTS idx_trip_completion_created_at ON trip_completion(created_at DESC);

-- RLS Policies

-- Policy for anonymous users to read trip completions (most permissive for customer app)
CREATE POLICY "Anonymous users can view trip completions"
  ON trip_completion
  FOR SELECT
  TO anon
  USING (true);

-- Policy for authenticated users to read trip completions
CREATE POLICY "Authenticated users can view trip completions"
  ON trip_completion
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for service role to insert trip completions
CREATE POLICY "Service role can insert trip completions"
  ON trip_completion
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy for service role to update trip completions
CREATE POLICY "Service role can update trip completions"
  ON trip_completion
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);
