import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

interface SimpleHosurMapProps {
  userLocation: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
}

const HOSUR_CENTER = {
  latitude: 12.7402,
  longitude: 77.8240,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
}: SimpleHosurMapProps) {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (mapRef.current && userLocation) {
      console.log('📍 Animating to user location:', userLocation);
      mapRef.current.animateToRegion(
        {
          ...userLocation,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000
      );
    }
  }, [userLocation]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={HOSUR_CENTER}
      showsUserLocation={false}
      showsMyLocationButton={true}
    >
      {userLocation && (
        <Marker
          coordinate={userLocation}
          title="Your Location"
          pinColor="blue"
        />
      )}
      {pickupLocation && (
        <Marker
          coordinate={pickupLocation}
          title="Pickup"
          pinColor="green"
        />
      )}
      {destinationLocation && (
        <Marker
          coordinate={destinationLocation}
          title="Destination"
          pinColor="red"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
