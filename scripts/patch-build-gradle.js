#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const appBuildGradle = path.join(__dirname, '..', 'android', 'app', 'build.gradle');

if (fs.existsSync(appBuildGradle)) {
  console.log('📝 Patching android/app/build.gradle for React Native 0.76.x...');
  let content = fs.readFileSync(appBuildGradle, 'utf8');

  // Remove enableBundleCompression (not supported in RN 0.76+)
  content = content.replace(/\s*enableBundleCompression\s*=\s*false.*\n?/g, '');
  content = content.replace(/\s*bundleCommand\s*=.*\n?/g, '');

  fs.writeFileSync(appBuildGradle, content, 'utf8');
  console.log('✅ app/build.gradle patched successfully');
} else {
  console.log('⚠️  android/app/build.gradle not found');
}
