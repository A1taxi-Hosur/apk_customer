// Primary API key from environment variables
export const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

// Validate API key is available
if (!GOOGLE_MAPS_API_KEY) {
  console.warn('⚠️ Google Maps API key not found in environment variables. Please check your .env file.');
}

// Default region for fallback - shows Hosur city area
export const DEFAULT_REGION = {
  latitude: 12.7402, // Hosur, Tamil Nadu, India
  longitude: 77.8240,
  latitudeDelta: 0.15, // Shows approximately 15-20 km area
  longitudeDelta: 0.15,
};

export const HOSUR_COORDINATES = {
  latitude: 12.7402,
  longitude: 77.8240,
  latitudeDelta: 0.15,
  longitudeDelta: 0.15,
};

export const HOSUR_LANDMARKS = [
  {
    name: 'Hosur Bus Stand',
    coordinates: { latitude: 12.7402, longitude: 77.8240 },
  },
  {
    name: 'Chandira Choodeswarar Temple',
    coordinates: { latitude: 12.7350, longitude: 77.8200 },
  },
  {
    name: 'Hosur Railway Station',
    coordinates: { latitude: 12.7450, longitude: 77.8300 },
  },
  {
    name: 'Kelavarapalli Dam',
    coordinates: { latitude: 12.7500, longitude: 77.8100 },
  },
  {
    name: 'Hosur Clock Tower',
    coordinates: { latitude: 12.7400, longitude: 77.8250 },
  },
];