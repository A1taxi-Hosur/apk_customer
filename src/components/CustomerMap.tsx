import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, Region } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '../config/maps';

interface CustomerMapProps {
  userLocation?: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
  driverLocation?: { latitude: number; longitude: number; heading?: number } | null;
  onRouteReady?: (distance: number, duration: number) => void;
}

const HOSUR_DEFAULT = {
  latitude: 12.7402,
  longitude: 77.8240,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function CustomerMap({
  userLocation,
  pickupLocation,
  destinationLocation,
  driverLocation,
  onRouteReady,
}: CustomerMapProps) {
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);

  // Set initial region based on what we have
  const getInitialRegion = (): Region => {
    if (userLocation) {
      console.log('🗺️ [CustomerMap] Using user location as initial region:', userLocation);
      return {
        ...userLocation,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }
    console.log('🗺️ [CustomerMap] No user location, using Hosur default');
    return HOSUR_DEFAULT;
  };

  // When map is ready and we have user location, center on it
  useEffect(() => {
    if (mapReady && userLocation && mapRef.current) {
      console.log('🗺️ [CustomerMap] Animating map to user location:', userLocation);
      mapRef.current.animateToRegion(
        {
          ...userLocation,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000
      );
    }
  }, [mapReady, userLocation?.latitude, userLocation?.longitude]);

  // When we have both pickup and destination, fit to show both
  useEffect(() => {
    if (mapReady && pickupLocation && destinationLocation && mapRef.current) {
      console.log('🗺️ [CustomerMap] Fitting map to pickup and destination');
      mapRef.current.fitToCoordinates([pickupLocation, destinationLocation], {
        edgePadding: { top: 100, right: 50, bottom: 300, left: 50 },
        animated: true,
      });
    }
  }, [mapReady, pickupLocation, destinationLocation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={getInitialRegion()}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        onMapReady={() => {
          console.log('✅ Map is ready');
          setMapReady(true);
        }}
      >
        {/* Pickup Marker (Green) */}
        {pickupLocation && (
          <Marker
            coordinate={pickupLocation}
            title="Pickup Location"
            pinColor="green"
          />
        )}

        {/* Destination Marker (Red) */}
        {destinationLocation && (
          <Marker
            coordinate={destinationLocation}
            title="Destination"
            pinColor="red"
          />
        )}

        {/* Driver Marker (Blue Car) */}
        {driverLocation && (
          <Marker
            coordinate={driverLocation}
            title="Driver"
            rotation={driverLocation.heading || 0}
          >
            <View style={styles.driverMarker}>
              <View style={styles.carIcon}>
                <View style={styles.carBody} />
                <View style={styles.carTop} />
              </View>
            </View>
          </Marker>
        )}

        {/* Route from Pickup to Destination */}
        {pickupLocation && destinationLocation && GOOGLE_MAPS_API_KEY && (
          <MapViewDirections
            origin={pickupLocation}
            destination={destinationLocation}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor="#2563EB"
            optimizeWaypoints={true}
            onReady={(result) => {
              console.log('✅ Route ready:', result.distance, 'km,', result.duration, 'min');
              onRouteReady?.(result.distance, result.duration);
            }}
            onError={(error) => {
              console.error('❌ Route error:', error);
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  driverMarker: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carIcon: {
    width: 30,
    height: 40,
    position: 'relative',
  },
  carBody: {
    position: 'absolute',
    bottom: 0,
    width: 30,
    height: 24,
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  carTop: {
    position: 'absolute',
    bottom: 16,
    left: 6,
    width: 18,
    height: 16,
    backgroundColor: '#1E40AF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
