const { withAppBuildGradle } = require('@expo/config-plugins');

/**
 * Expo Config Plugin to remove enableBundleCompression from app/build.gradle
 * This property was removed in React Native 0.76.x
 */
const withRemoveBundleCompression = (config) => {
  return withAppBuildGradle(config, (config) => {
    // Remove the enableBundleCompression line
    config.modResults.contents = config.modResults.contents
      .replace(/\s*enableBundleCompression\s*=\s*false.*\n?/g, '')
      .replace(/\s*bundleCommand\s*=.*\n?/g, '');

    return config;
  });
};

module.exports = withRemoveBundleCompression;
