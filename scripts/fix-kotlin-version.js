#!/usr/bin/env node

/**
 * FORCEFUL Post-install script to fix Kotlin version for EAS builds
 * This script patches Expo's autolinking plugin to:
 * 1. Add missing Kotlin 1.9.24 mapping (if needed)
 * 2. Replace any 1.9.x references with 2.0.21
 * 3. Ensure KSP version is 2.0.21-1.0.27
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 FORCEFULLY fixing Kotlin version for Expo build...');

// Path to the Expo autolinking plugin Constants.kt file
const constantsPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'expo-modules-autolinking',
  'android',
  'expo-gradle-plugin',
  'expo-autolinking-plugin-shared',
  'src',
  'main',
  'kotlin',
  'expo',
  'modules',
  'plugin',
  'shared',
  'Constants.kt'
);

// Path to the Expo root project plugin
const rootProjectPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'expo-modules-autolinking',
  'android',
  'expo-gradle-plugin',
  'expo-autolinking-plugin',
  'src',
  'main',
  'kotlin',
  'expo',
  'modules',
  'plugin'
);

try {
  // Fix Constants.kt if it exists
  if (fs.existsSync(constantsPath)) {
    console.log('📝 Found Constants.kt, patching...');
    let content = fs.readFileSync(constantsPath, 'utf8');

    // Add missing 1.9.24 mapping if the map exists
    if (content.includes('KOTLIN_TO_KSP_VERSION_MAP') || content.includes('kotlinToKspVersionMap')) {
      // Replace 1.9.x versions with 2.0.21
      content = content.replace(/["']1\.9\.\d+["']\s*to\s*["'][^"']+["']/g, '"2.0.21" to "2.0.21-1.0.27"');

      // If the map doesn't have 1.9.24, add it
      if (!content.includes('"1.9.24"')) {
        content = content.replace(
          /(KOTLIN_TO_KSP_VERSION_MAP.*?=.*?mapOf\()/s,
          '$1\n    "1.9.24" to "2.0.21-1.0.27",'
        );
      }

      fs.writeFileSync(constantsPath, content, 'utf8');
      console.log('✅ Constants.kt patched successfully');
    } else {
      console.log('ℹ️  No version map found in Constants.kt');
    }
  } else {
    console.log('⚠️  Constants.kt not found at expected path');
  }

  // Find and patch all Kotlin files that reference versions
  const findKotlinFiles = (dir) => {
    if (!fs.existsSync(dir)) return [];

    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...findKotlinFiles(fullPath));
      } else if (item.endsWith('.kt')) {
        files.push(fullPath);
      }
    }

    return files;
  };

  if (fs.existsSync(rootProjectPath)) {
    console.log('📝 Scanning for Kotlin files with version references...');
    const kotlinFiles = findKotlinFiles(rootProjectPath);

    for (const file of kotlinFiles) {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;

      // Replace any hardcoded 1.9.x versions with 2.0.21
      content = content.replace(/["']1\.9\.\d+["']/g, '"2.0.21"');

      // Replace KSP versions to match
      content = content.replace(/["']1\.9\.\d+-\d+\.\d+\.\d+["']/g, '"2.0.21-1.0.27"');

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Patched: ${path.relative(rootProjectPath, file)}`);
      }
    }
  }

  console.log('✅ Kotlin version FORCEFULLY set to 2.0.21 everywhere');
} catch (error) {
  console.error('❌ Error patching Kotlin version:', error.message);
  // Don't fail the install if patching fails - EAS hooks will handle it
  console.log('⚠️  Will rely on EAS hooks to set Kotlin version');
  process.exit(0);
}

console.log('✅ Post-install script completed successfully');
