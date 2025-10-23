#!/usr/bin/env bash

# This script runs before the build to configure Kotlin version
echo "🔧 EAS Build Pre-Install Hook: Configuring Kotlin version..."

# The gradle.properties file will be created after prebuild
# We'll set environment variables that Expo will pick up
export KOTLIN_VERSION=2.0.21
export KSP_VERSION=2.0.21-1.0.28

echo "✅ Kotlin version configured: $KOTLIN_VERSION"
echo "✅ KSP version configured: $KSP_VERSION"
