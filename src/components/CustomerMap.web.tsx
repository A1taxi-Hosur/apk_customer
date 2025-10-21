import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CustomerMapProps {
  userLocation?: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
  driverLocation?: { latitude: number; longitude: number; heading?: number } | null;
  onRouteReady?: (distance: number, duration: number) => void;
}

export default function CustomerMap({
  userLocation,
  pickupLocation,
  destinationLocation,
  driverLocation,
  onRouteReady,
}: CustomerMapProps) {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Map View</Text>
        <Text style={styles.infoText}>
          {userLocation ? `User: ${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}` : 'No location'}
        </Text>
        <Text style={styles.infoText}>
          {pickupLocation ? `Pickup: ${pickupLocation.latitude.toFixed(4)}, ${pickupLocation.longitude.toFixed(4)}` : 'No pickup'}
        </Text>
        <Text style={styles.infoText}>
          {destinationLocation ? `Destination: ${destinationLocation.latitude.toFixed(4)}, ${destinationLocation.longitude.toFixed(4)}` : 'No destination'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
});
