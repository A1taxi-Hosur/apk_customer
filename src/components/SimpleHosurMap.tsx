import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

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

const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
}: SimpleHosurMapProps) {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (mapRef.current && pickupLocation && destinationLocation) {
      console.log('🗺️ [MAP] Fitting map to show route');
      mapRef.current.fitToCoordinates([pickupLocation, destinationLocation], {
        edgePadding: { top: 100, right: 50, bottom: 300, left: 50 },
        animated: true,
      });
    }
  }, [pickupLocation, destinationLocation]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={
        userLocation
          ? {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }
          : HOSUR_CENTER
      }
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {pickupLocation && (
        <Marker
          coordinate={pickupLocation}
          title="Pickup"
          description="Pickup location"
          pinColor="green"
        />
      )}
      {destinationLocation && (
        <Marker
          coordinate={destinationLocation}
          title="Destination"
          description="Drop-off location"
          pinColor="red"
        />
      )}
      {pickupLocation && destinationLocation && GOOGLE_MAPS_API_KEY && (
        <MapViewDirections
          origin={pickupLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={4}
          strokeColor="#1F2937"
          optimizeWaypoints={true}
          onReady={(result) => {
            console.log('🗺️ [MAP] Route ready:', result.distance, 'km,', result.duration, 'min');
          }}
          onError={(errorMessage) => {
            console.error('🗺️ [MAP] Route error:', errorMessage);
          }}
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
