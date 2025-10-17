const { withAppBuildGradle } = require('@expo/config-plugins');

// Custom config plugin to fix React Native 0.76.x compatibility
const withRemoveBundleCompression = (config) => {
  return withAppBuildGradle(config, (config) => {
    // Remove enableBundleCompression and bundleCommand (not supported in RN 0.76+)
    if (config.modResults.contents) {
      config.modResults.contents = config.modResults.contents
        .replace(/\s*enableBundleCompression\s*=\s*false.*\n?/g, '')
        .replace(/\s*bundleCommand\s*=.*\n?/g, '');
    }
    return config;
  });
};

// Load the base config from app.json
const appJson = require('./app.json');

// Export the config with our custom plugin applied
module.exports = withRemoveBundleCompression(appJson.expo);
