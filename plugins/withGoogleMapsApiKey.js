const { withAndroidManifest } = require('@expo/config-plugins');

const GOOGLE_MAPS_API_KEY = 'AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q';

const withGoogleMapsApiKey = (config) => {
  return withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    const application = androidManifest.manifest.application[0];

    // Remove any existing Google Maps API key meta-data
    if (application['meta-data']) {
      application['meta-data'] = application['meta-data'].filter(
        (item) => item.$['android:name'] !== 'com.google.android.geo.API_KEY'
      );
    } else {
      application['meta-data'] = [];
    }

    // Add the Google Maps API key
    application['meta-data'].push({
      $: {
        'android:name': 'com.google.android.geo.API_KEY',
        'android:value': GOOGLE_MAPS_API_KEY,
      },
    });

    return config;
  });
};

module.exports = withGoogleMapsApiKey;
