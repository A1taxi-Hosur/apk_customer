#!/usr/bin/env node

/**
 * CRITICAL Post-install script to fix Kotlin version for EAS builds
 * This script patches React Native and Expo's Kotlin version references
 * The issue: React Native 0.76.5 uses Kotlin 1.9.24 in libs.versions.toml
 * But Expo SDK 53 doesn't support 1.9.24, causing "Key 1.9.24 is missing in the map" error
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 CRITICAL: Patching React Native Kotlin version from 1.9.24 to 2.0.21...');

// CRITICAL: These TOML files define the Kotlin version for React Native
const tomlFilesToPatch = [
  'node_modules/@react-native/gradle-plugin/gradle/libs.versions.toml',
  'node_modules/react-native/gradle/libs.versions.toml'
];

let patchedCount = 0;

for (const tomlFile of tomlFilesToPatch) {
  const filePath = path.join(__dirname, '..', tomlFile);

  try {
    if (fs.existsSync(filePath)) {
      console.log(`📝 Patching ${tomlFile}...`);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Replace Kotlin 1.9.24 with 2.0.21 in TOML format
      content = content.replace(/kotlin\s*=\s*["']1\.9\.24["']/g, 'kotlin = "2.0.21"');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Successfully patched ${tomlFile}`);
        patchedCount++;
      } else {
        console.log(`ℹ️  ${tomlFile} already correct or pattern not found`);
      }
    } else {
      console.log(`⚠️  ${tomlFile} not found`);
    }
  } catch (error) {
    console.error(`❌ Error patching ${tomlFile}:`, error.message);
  }
}

// Also patch Expo modules that reference 1.9.24
const expoFilesToPatch = [
  'node_modules/expo-modules-core/expo-module-gradle-plugin/build.gradle.kts',
  'node_modules/expo-modules-autolinking/android/expo-gradle-plugin/build.gradle.kts',
  'node_modules/expo-modules-autolinking/android/expo-gradle-plugin/expo-autolinking-plugin-shared/build.gradle.kts'
];

for (const gradleFile of expoFilesToPatch) {
  const filePath = path.join(__dirname, '..', gradleFile);

  try {
    if (fs.existsSync(filePath)) {
      console.log(`📝 Patching ${gradleFile}...`);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Replace Kotlin version in build.gradle.kts files
      content = content.replace(/version\s+"1\.9\.24"/g, 'version "2.0.21"');
      content = content.replace(/version\s+'1\.9\.24'/g, "version '2.0.21'");
      content = content.replace(/:kotlin-gradle-plugin:1\.9\.24/g, ':kotlin-gradle-plugin:2.0.21');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Successfully patched ${gradleFile}`);
        patchedCount++;
      }
    }
  } catch (error) {
    console.error(`❌ Error patching ${gradleFile}:`, error.message);
  }
}

// Patch the Constants.kt if it exists
const constantsPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'expo-modules-core',
  'android',
  'ExpoModulesCorePlugin.gradle'
);

try {
  if (fs.existsSync(constantsPath)) {
    console.log('📝 Patching ExpoModulesCorePlugin.gradle...');
    let content = fs.readFileSync(constantsPath, 'utf8');
    const originalContent = content;

    // Add or update the 1.9.24 mapping
    if (content.includes('1.9.24')) {
      content = content.replace(/"1\.9\.24":\s*"[^"]+"/g, '"1.9.24": "2.0.21-1.0.27"');
      content = content.replace(/'1\.9\.24':\s*'[^']+'/g, "'1.9.24': '2.0.21-1.0.27'");

      if (content !== originalContent) {
        fs.writeFileSync(constantsPath, content, 'utf8');
        console.log('✅ Successfully patched ExpoModulesCorePlugin.gradle');
        patchedCount++;
      }
    }
  }
} catch (error) {
  console.error('❌ Error patching ExpoModulesCorePlugin.gradle:', error.message);
}

// STEP 5: Patch Expo's prebuild config templates to remove enableBundleCompression
// This is the SOURCE of the problem - Expo generates build.gradle with this property
const expoConfigFiles = [
  'node_modules/@expo/config-plugins/build/plugins/android-plugins.js',
  'node_modules/@expo/prebuild-config/build/plugins/unversioned/expo-build-properties.js'
];

for (const configFile of expoConfigFiles) {
  const filePath = path.join(__dirname, '..', configFile);

  try {
    if (fs.existsSync(filePath)) {
      console.log(`📝 Patching ${configFile}...`);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove references to enableBundleCompression
      content = content.replace(/enableBundleCompression/g, 'REMOVED_enableBundleCompression');
      content = content.replace(/bundleCommand/g, 'REMOVED_bundleCommand');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Successfully patched ${configFile}`);
        patchedCount++;
      }
    }
  } catch (error) {
    console.error(`❌ Error patching ${configFile}:`, error.message);
  }
}

// STEP 6: Find and patch ALL Expo config files that might generate app/build.gradle
const expoConfigDir = path.join(__dirname, '..', 'node_modules', '@expo');
try {
  const findAndPatchFiles = (dir) => {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        findAndPatchFiles(fullPath);
      } else if (file.name.endsWith('.js') || file.name.endsWith('.ts')) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('enableBundleCompression') || content.includes('bundleCommand')) {
            console.log(`📝 Patching ${fullPath.replace(path.join(__dirname, '..'), '')}...`);
            const originalContent = content;

            content = content.replace(/enableBundleCompression/g, 'REMOVED_enableBundleCompression');
            content = content.replace(/bundleCommand/g, 'REMOVED_bundleCommand');

            if (content !== originalContent) {
              fs.writeFileSync(fullPath, content, 'utf8');
              patchedCount++;
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  };

  console.log('🔍 Searching for Expo config files that generate enableBundleCompression...');
  findAndPatchFiles(expoConfigDir);
} catch (error) {
  console.error('❌ Error scanning Expo config:', error.message);
}

// Create helper script for patching app/build.gradle after prebuild (if still needed)
const helperScriptPath = path.join(__dirname, 'patch-build-gradle.js');
const helperScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const appBuildGradle = path.join(__dirname, '..', 'android', 'app', 'build.gradle');

if (fs.existsSync(appBuildGradle)) {
  console.log('📝 Patching android/app/build.gradle for React Native 0.76.x...');
  let content = fs.readFileSync(appBuildGradle, 'utf8');

  // Remove enableBundleCompression (not supported in RN 0.76+)
  content = content.replace(/\\s*enableBundleCompression\\s*=\\s*false.*\\n?/g, '');
  content = content.replace(/\\s*bundleCommand\\s*=.*\\n?/g, '');

  fs.writeFileSync(appBuildGradle, content, 'utf8');
  console.log('✅ app/build.gradle patched successfully');
} else {
  console.log('⚠️  android/app/build.gradle not found');
}
`;

try {
  fs.writeFileSync(helperScriptPath, helperScript, 'utf8');
  fs.chmodSync(helperScriptPath, '755');
  patchedCount++;
} catch (error) {
  console.error('❌ Error creating helper script:', error.message);
}

if (patchedCount > 0) {
  console.log(`✅ Successfully patched ${patchedCount} file(s) with Kotlin 2.0.21`);
} else {
  console.log('⚠️  No files were patched - they may already be correct');
}

console.log('✅ Post-install script completed');
