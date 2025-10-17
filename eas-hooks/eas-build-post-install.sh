#!/usr/bin/env bash

# This script runs after prebuild to fix the Kotlin version in gradle files
echo "🔧 EAS Build Post-Install Hook: Fixing Kotlin version in gradle files..."

# Check if android directory exists (it should after prebuild)
if [ -d "android" ]; then
  echo "✅ Android directory found"

  # Create or update gradle.properties
  GRADLE_PROPS="android/gradle.properties"

  if [ -f "$GRADLE_PROPS" ]; then
    echo "📝 Updating existing gradle.properties..."

    # Remove existing Kotlin and KSP version lines if they exist
    sed -i.bak '/^KOTLIN_VERSION=/d' "$GRADLE_PROPS"
    sed -i.bak '/^KSP_VERSION=/d' "$GRADLE_PROPS"

    # Append correct versions
    echo "" >> "$GRADLE_PROPS"
    echo "# Kotlin and KSP versions" >> "$GRADLE_PROPS"
    echo "KOTLIN_VERSION=2.0.21" >> "$GRADLE_PROPS"
    echo "KSP_VERSION=2.0.21-1.0.27" >> "$GRADLE_PROPS"

    echo "✅ gradle.properties updated with Kotlin 2.0.21"
  else
    echo "⚠️  gradle.properties not found at $GRADLE_PROPS"
  fi

  # Also update build.gradle if it exists
  BUILD_GRADLE="android/build.gradle"

  if [ -f "$BUILD_GRADLE" ]; then
    echo "📝 Checking build.gradle..."

    # Replace any hardcoded Kotlin version with 2.0.21
    sed -i.bak 's/kotlinVersion = "1\.9\.[0-9]*"/kotlinVersion = "2.0.21"/g' "$BUILD_GRADLE"
    sed -i.bak "s/ext\.kotlinVersion = '1\.9\.[0-9]*'/ext.kotlinVersion = '2.0.21'/g" "$BUILD_GRADLE"
    sed -i.bak 's/ext\.kotlinVersion = "1\.9\.[0-9]*"/ext.kotlinVersion = "2.0.21"/g' "$BUILD_GRADLE"

    echo "✅ build.gradle checked and updated if needed"
  fi

  echo "✅ Kotlin version fix completed"
else
  echo "⚠️  Android directory not found - this might run before prebuild"
fi
