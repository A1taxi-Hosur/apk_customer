import React from 'react';
import { useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function AuthNavigator() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  React.useEffect(() => {
    // Wait for navigation to be ready
    if (!navigationState?.key) {
      console.log('⏳ AuthNavigator - waiting for navigation to be ready');
      return;
    }

    console.log('🔍 AuthNavigator - checking auth state:', {
      user: !!user,
      loading,
      segments: segments.join('/'),
      userEmail: user?.email,
      userRole: user?.role
    });

    if (loading) return;

    const inAuthGroup = segments[0] === 'auth';
    const onVerifyOTP = segments[0] === 'auth' && segments[1] === 'verify-otp';

    // Don't redirect users while they're on the verify-otp screen
    if (onVerifyOTP) {
      console.log('🔐 User on verify-otp screen, skipping navigation');
      return;
    }

    if (!user && !inAuthGroup) {
      // User is not authenticated and not on auth screen, redirect to login
      console.log('🔄 Redirecting to login - user not authenticated');
      router.replace('/auth/login');
    } else if (user && inAuthGroup) {
      // User is authenticated but on auth screen, redirect to tabs
      console.log('🔄 User authenticated, checking if should redirect to tabs');

      // Only redirect if user has proper role and profile
      if (user.role === 'customer') {
        console.log('✅ Customer authenticated, redirecting to tabs');
        router.replace('/(tabs)');
      } else {
        console.log('⚠️ User authenticated but role not set, staying on auth');
      }
    } else if (user && !inAuthGroup) {
      console.log('✅ User authenticated and on correct screen');
    }
  }, [user, loading, segments, navigationState?.key]);

  return null;
}