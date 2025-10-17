#!/usr/bin/env node

/**
 * Post-install script to fix Kotlin version for EAS builds
 * This script patches the Expo autolinking plugin to use Kotlin 2.0.21
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Kotlin version for Expo build...');

// Path to the Expo autolinking plugin that causes the issue
const pluginPath = path.join(
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

try {
  if (fs.existsSync(pluginPath)) {
    let content = fs.readFileSync(pluginPath, 'utf8');

    // Replace any reference to 1.9.24 with 2.0.21
    if (content.includes('1.9.24')) {
      content = content.replace(/1\.9\.24/g, '2.0.21');
      fs.writeFileSync(pluginPath, content, 'utf8');
      console.log('✅ Successfully patched Kotlin version to 2.0.21');
    } else {
      console.log('ℹ️  No Kotlin 1.9.24 references found - might already be patched');
    }
  } else {
    console.log('⚠️  Plugin file not found - might not be needed for this SDK version');
  }
} catch (error) {
  console.error('❌ Error patching Kotlin version:', error.message);
  // Don't fail the install if patching fails
  process.exit(0);
}

console.log('✅ Kotlin version fix completed');
