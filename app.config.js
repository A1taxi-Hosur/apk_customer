// Load the base config from app.json
const appJson = require('./app.json');

// Export the config with environment variables properly mapped
module.exports = {
  ...appJson.expo,
  extra: {
    ...appJson.expo.extra,
    // These will be accessible via process.env.EXPO_PUBLIC_*
    EXPO_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || appJson.expo.extra.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL || appJson.expo.extra.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || appJson.expo.extra.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  }
};
