#!/usr/bin/env bash

set -e

# This script FORCEFULLY sets Kotlin 2.0.21 and KSP 2.0.21-1.0.27 everywhere
echo "🔧 EAS Build Post-Install Hook: FORCEFULLY setting Kotlin version..."

# Check if android directory exists (it should after prebuild)
if [ -d "android" ]; then
  echo "✅ Android directory found"

  # FORCE UPDATE gradle.properties
  GRADLE_PROPS="android/gradle.properties"

  if [ -f "$GRADLE_PROPS" ]; then
    echo "📝 FORCEFULLY updating gradle.properties..."

    # Remove ALL Kotlin and KSP version lines
    sed -i.bak '/KOTLIN_VERSION/d' "$GRADLE_PROPS"
    sed -i.bak '/KSP_VERSION/d' "$GRADLE_PROPS"
    sed -i.bak '/kotlinVersion/d' "$GRADLE_PROPS"
    sed -i.bak '/kspVersion/d' "$GRADLE_PROPS"

    # Append correct versions at the TOP
    cat > "$GRADLE_PROPS.tmp" << EOF
# FORCEFULLY SET Kotlin and KSP versions
KOTLIN_VERSION=2.0.21
KSP_VERSION=2.0.21-1.0.27

EOF
    cat "$GRADLE_PROPS" >> "$GRADLE_PROPS.tmp"
    mv "$GRADLE_PROPS.tmp" "$GRADLE_PROPS"

    echo "✅ gradle.properties FORCEFULLY updated with Kotlin 2.0.21"
  fi

  # FORCE UPDATE build.gradle
  BUILD_GRADLE="android/build.gradle"

  if [ -f "$BUILD_GRADLE" ]; then
    echo "📝 FORCEFULLY updating build.gradle..."

    # Replace ALL Kotlin version references
    sed -i.bak 's/kotlinVersion = "[0-9.]*"/kotlinVersion = "2.0.21"/g' "$BUILD_GRADLE"
    sed -i.bak "s/kotlinVersion = '[0-9.]*'/kotlinVersion = '2.0.21'/g" "$BUILD_GRADLE"
    sed -i.bak 's/ext\.kotlinVersion = "[0-9.]*"/ext.kotlinVersion = "2.0.21"/g' "$BUILD_GRADLE"
    sed -i.bak "s/ext\.kotlinVersion = '[0-9.]*'/ext.kotlinVersion = '2.0.21'/g" "$BUILD_GRADLE"
    sed -i.bak 's/"org\.jetbrains\.kotlin:kotlin-gradle-plugin:[0-9.]*"/"org.jetbrains.kotlin:kotlin-gradle-plugin:2.0.21"/g' "$BUILD_GRADLE"

    # Add explicit Kotlin version at the top of buildscript
    sed -i.bak '/^buildscript {/a\    ext.kotlinVersion = "2.0.21"' "$BUILD_GRADLE"

    echo "✅ build.gradle FORCEFULLY updated"
  fi

  # FORCE UPDATE settings.gradle
  SETTINGS_GRADLE="android/settings.gradle"

  if [ -f "$SETTINGS_GRADLE" ]; then
    echo "📝 FORCEFULLY updating settings.gradle..."

    # Replace ALL Kotlin version references in settings.gradle
    sed -i.bak 's/kotlinVersion = "[0-9.]*"/kotlinVersion = "2.0.21"/g' "$SETTINGS_GRADLE"
    sed -i.bak "s/kotlinVersion = '[0-9.]*'/kotlinVersion = '2.0.21'/g" "$SETTINGS_GRADLE"

    echo "✅ settings.gradle FORCEFULLY updated"
  fi

  # FORCE UPDATE ALL app/build.gradle files
  find android -name "build.gradle" -o -name "build.gradle.kts" | while read gradle_file; do
    echo "📝 Processing $gradle_file..."
    sed -i.bak 's/kotlinVersion = "[0-9.]*"/kotlinVersion = "2.0.21"/g' "$gradle_file"
    sed -i.bak "s/kotlinVersion = '[0-9.]*'/kotlinVersion = '2.0.21'/g" "$gradle_file"
  done

  # Disable KSP tasks at root level for ALL subprojects
  if [ -f "$GRADLE_PROPS" ]; then
    echo "📝 Disabling KSP tasks at root level..."
    grep -q "ksp.disable.project.root" "$GRADLE_PROPS" || echo "ksp.disable.project.root=true" >> "$GRADLE_PROPS"
  fi

  echo "✅ ALL Kotlin version references FORCEFULLY set to 2.0.21"
else
  echo "⚠️  Android directory not found - script will run again after prebuild"
fi

echo "✅ Post-install hook completed successfully"
