const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

// Custom config plugin to fix React Native 0.76.x compatibility with Expo SDK 53
// RN 0.76 doesn't support enableBundleCompression (added in RN 0.79)
const withRemoveBundleCompression = (config) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const appBuildGradlePath = path.join(
        config.modRequest.platformProjectRoot,
        'app',
        'build.gradle'
      );

      if (fs.existsSync(appBuildGradlePath)) {
        let contents = fs.readFileSync(appBuildGradlePath, 'utf-8');

        // Remove enableBundleCompression (not supported in RN 0.76)
        contents = contents
          .replace(/\s*enableBundleCompression\s*=\s*(true|false).*\n?/g, '')
          .replace(/\s*bundleCommand\s*=.*\n?/g, '');

        fs.writeFileSync(appBuildGradlePath, contents);
        console.log('✅ Removed incompatible RN 0.79 properties from build.gradle');
      }

      return config;
    },
  ]);
};

// Load the base config from app.json
const appJson = require('./app.json');

// Export the config with compatibility fix
module.exports = withRemoveBundleCompression(appJson.expo);
