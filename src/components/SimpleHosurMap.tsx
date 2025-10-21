import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface SimpleHosurMapProps {
  userLocation: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
  onRegionChangeComplete?: (coords: { latitude: number; longitude: number }) => void;
  onDestinationDragEnd?: (coords: { latitude: number; longitude: number }) => void;
  showCenteredPin?: boolean;
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
  onRegionChangeComplete,
  onDestinationDragEnd,
  showCenteredPin = false,
}: SimpleHosurMapProps) {
  const mapRef = useRef<MapView>(null);

  const handleRegionChangeComplete = (region: any) => {
    // Allow region changes only when there's no destination OR when pickup marker doesn't exist yet
    if (onRegionChangeComplete && (!destinationLocation || !pickupLocation)) {
      onRegionChangeComplete({
        latitude: region.latitude,
        longitude: region.longitude,
      });
    }
  };

  // Smooth animation to follow user location when no destination (Uber-style)
  useEffect(() => {
    if (mapRef.current && userLocation && !destinationLocation) {
      console.log('🗺️ [MAP] Smoothly animating to user location');
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        800
      );
    }
  }, [userLocation]);

  // Fit map to show both pickup and destination with route
  useEffect(() => {
    if (mapRef.current && pickupLocation && destinationLocation) {
      console.log('🗺️ [MAP] Fitting map to show complete route with markers');
      // Small delay to ensure markers are rendered before fitting
      setTimeout(() => {
        mapRef.current?.fitToCoordinates([pickupLocation, destinationLocation], {
          edgePadding: { top: 120, right: 80, bottom: 400, left: 80 },
          animated: true,
        });
      }, 100);
    }
  }, [pickupLocation, destinationLocation]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={
        userLocation
          ? {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : HOSUR_CENTER
      }
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsCompass={true}
      onRegionChangeComplete={handleRegionChangeComplete}
      mapPadding={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      {/* Pickup Marker - Always show when pickup location exists */}
      {pickupLocation && (
        <Marker
          coordinate={pickupLocation}
          title="Pickup Location"
          description="Your starting point"
          identifier="pickup"
          draggable
          onDragEnd={(e) => {
            const newCoords = e.nativeEvent.coordinate;
            console.log('📍 [MAP] Pickup marker dragged to:', newCoords);
            if (onRegionChangeComplete) {
              onRegionChangeComplete(newCoords);
            }
          }}
        >
          <View style={styles.pickupMarker}>
            <View style={styles.pickupMarkerInner}>
              <Text style={styles.markerIcon}>📍</Text>
            </View>
            <View style={styles.markerShadow} />
          </View>
        </Marker>
      )}

      {/* Destination Marker - Always show when destination exists */}
      {destinationLocation && (
        <Marker
          coordinate={destinationLocation}
          title="Destination"
          description="Your drop-off point"
          identifier="destination"
          draggable
          onDragEnd={(e) => {
            const newCoords = e.nativeEvent.coordinate;
            console.log('🎯 [MAP] Destination marker dragged to:', newCoords);
            if (onDestinationDragEnd) {
              onDestinationDragEnd(newCoords);
            }
          }}
        >
          <View style={styles.destinationMarker}>
            <View style={styles.destinationMarkerInner}>
              <Text style={styles.markerIcon}>🎯</Text>
            </View>
            <View style={styles.markerShadow} />
          </View>
        </Marker>
      )}

      {/* Route Line - Show when both locations exist */}
      {pickupLocation && destinationLocation && GOOGLE_MAPS_API_KEY && (
        <MapViewDirections
          origin={pickupLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor="#2563EB"
          optimizeWaypoints={true}
          onReady={(result) => {
            console.log('🗺️ [MAP] Route calculated:', {
              distance: `${result.distance.toFixed(1)} km`,
              duration: `${Math.round(result.duration)} min`,
              coordinates: result.coordinates.length
            });
          }}
          onError={(errorMessage) => {
            console.error('🗺️ [MAP] Route calculation error:', errorMessage);
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
  pickupMarker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickupMarkerInner: {
    backgroundColor: '#10B981',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  destinationMarker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationMarkerInner: {
    backgroundColor: '#EF4444',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  markerIcon: {
    fontSize: 24,
  },
  markerShadow: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
    marginTop: -5,
  },
});
