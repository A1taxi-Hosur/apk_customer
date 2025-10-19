// Load the base config from app.json
const appJson = require('./app.json');

const GOOGLE_MAPS_API_KEY = 'AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q';

// Export the config with environment variables properly mapped
module.exports = {
  ...appJson.expo,
  android: {
    ...appJson.expo.android,
    config: {
      ...appJson.expo.android?.config,
      googleMaps: {
        apiKey: GOOGLE_MAPS_API_KEY,
      },
    },
  },
  plugins: [
    [
      'expo-router',
      {
        root: './app',
      },
    ],
    [
      'react-native-maps',
      {
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
      },
    ],
    'expo-font',
    'expo-web-browser',
    'expo-location',
    'expo-notifications',
  ],
  extra: {
    ...appJson.expo.extra,
    // These will be accessible via process.env.EXPO_PUBLIC_*
    EXPO_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || appJson.expo.extra.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY,
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL || appJson.expo.extra.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || appJson.expo.extra.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  },
};
