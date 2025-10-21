/*
  # Fix Users Table RLS Infinite Recursion

  1. Problem
    - The policies "anon_can_read_driver_user_info" and "authenticated_can_read_driver_user_info" 
      contain EXISTS subqueries that reference the drivers table
    - The drivers table likely has foreign key relationships to users table
    - This creates infinite recursion when querying users table

  2. Solution
    - Drop the problematic policies with EXISTS subqueries
    - These policies were meant to allow reading driver user info
    - The service role policies already handle this for edge functions
    - Anonymous and authenticated users can use the service role edge functions instead

  3. Security
    - Maintains user privacy (users can only see their own data)
    - Service role can access all users (for edge functions)
    - Admins can manage all users
    - No infinite recursion
*/

-- Drop the problematic policies that cause infinite recursion
DROP POLICY IF EXISTS "anon_can_read_driver_user_info" ON users;
DROP POLICY IF EXISTS "authenticated_can_read_driver_user_info" ON users;