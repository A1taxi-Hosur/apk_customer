import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

console.log('🚀🚀🚀 [SIMPLE-MAP-V2] FILE LOADED - TIMESTAMP:', new Date().toISOString());

interface AvailableDriver {
  driver_id: string;
  user_id: string;
  vehicle_type: string;
  latitude: number;
  longitude: number;
  heading?: number;
  distance?: number;
  rating?: number;
}

interface SimpleHosurMapProps {
  userLocation: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
  onRegionChangeComplete?: (coords: { latitude: number; longitude: number }) => void;
  onDestinationDragEnd?: (coords: { latitude: number; longitude: number }) => void;
  showCenteredPin?: boolean;
  availableDrivers?: AvailableDriver[];
  showDrivers?: boolean;
}

const HOSUR_CENTER = {
  latitude: 12.7402,
  longitude: 77.8240,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const decodePolyline = (encoded: string) => {
  const poly = [];
  let index = 0;
  const len = encoded.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let b;
    let shift = 0;
    let result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    poly.push({
      latitude: lat / 1e5,
      longitude: lng / 1e5,
    });
  }
  return poly;
};

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
  onRegionChangeComplete,
  onDestinationDragEnd,
  showCenteredPin = false,
  availableDrivers = [],
  showDrivers = false,
}: SimpleHosurMapProps) {
  console.log('🔥🔥🔥 [SIMPLE-MAP-V2] NEW CODE IS LOADED - VERSION 2.0 🔥🔥🔥');
  console.log('🗺️ [SIMPLE-MAP] ===== RENDERING MAP =====');
  console.log('🗺️ [SIMPLE-MAP] Props received:', {
    hasUserLocation: !!userLocation,
    hasPickupLocation: !!pickupLocation,
    hasDestinationLocation: !!destinationLocation,
    showCenteredPin,
    userLocation,
    pickupLocation,
    destinationLocation,
    availableDriversCount: availableDrivers.length,
    showDrivers
  });

  const mapRef = useRef<MapView>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<any[]>([]);

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

  // Calculate route when locations change
  useEffect(() => {
    if (pickupLocation && destinationLocation && GOOGLE_MAPS_API_KEY) {
      calculateRoute();
    }
  }, [pickupLocation, destinationLocation]);

  // Fit map to show both pickup and destination with route
  useEffect(() => {
    if (mapRef.current && pickupLocation && destinationLocation) {
      console.log('🗺️ [MAP] Fitting map to show complete route with markers');
      setTimeout(() => {
        mapRef.current?.fitToCoordinates([pickupLocation, destinationLocation], {
          edgePadding: { top: 120, right: 80, bottom: 400, left: 80 },
          animated: true,
        });
      }, 100);
    }
  }, [pickupLocation, destinationLocation]);

  const calculateRoute = async () => {
    if (!pickupLocation || !destinationLocation) return;

    try {
      const origin = `${pickupLocation.latitude},${pickupLocation.longitude}`;
      const destination = `${destinationLocation.latitude},${destinationLocation.longitude}`;

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_MAPS_API_KEY}`
      );

      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const points = data.routes[0].overview_polyline.points;
        const decodedPoints = decodePolyline(points);
        setRouteCoordinates(decodedPoints);
        console.log('✅ [MAP] Route calculated with', decodedPoints.length, 'points');
      } else {
        setRouteCoordinates([pickupLocation, destinationLocation]);
      }
    } catch (error) {
      console.error('❌ [MAP] Route calculation error:', error);
      setRouteCoordinates([pickupLocation, destinationLocation]);
    }
  };

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
      {/* Pickup Marker - ULTRA VISIBLE TEST VERSION */}
      {pickupLocation && (
        <>
          {console.log('🟢🟢🟢 [V3] RENDERING ULTRA-VISIBLE PICKUP MARKER at:', pickupLocation)}
          <Marker
            coordinate={pickupLocation}
            title="🟢 PICKUP HERE 🟢"
            description="Your starting point"
            identifier="pickup"
            draggable
            zIndex={1000}
            opacity={1.0}
            onDragEnd={(e) => {
              const newCoords = e.nativeEvent.coordinate;
              console.log('📍 [V3] Pickup marker dragged to:', newCoords);
              if (onRegionChangeComplete) {
                onRegionChangeComplete(newCoords);
              }
            }}
          >
            <View style={styles.ultraVisiblePickupMarker}>
              <Text style={styles.ultraVisibleMarkerText}>PICKUP</Text>
            </View>
          </Marker>
        </>
      )}

      {/* Destination Marker - ULTRA VISIBLE TEST VERSION */}
      {destinationLocation && (
        <>
          {console.log('🔴🔴🔴 [V3] RENDERING ULTRA-VISIBLE DESTINATION MARKER at:', destinationLocation)}
          <Marker
            coordinate={destinationLocation}
            title="🔴 DESTINATION HERE 🔴"
            description="Your drop-off point"
            identifier="destination"
            draggable
            zIndex={1000}
            opacity={1.0}
            onDragEnd={(e) => {
              const newCoords = e.nativeEvent.coordinate;
              console.log('🎯 [V3] Destination marker dragged to:', newCoords);
              if (onDestinationDragEnd) {
                onDestinationDragEnd(newCoords);
              }
            }}
          >
            <View style={styles.ultraVisibleDestinationMarker}>
              <Text style={styles.ultraVisibleMarkerText}>DESTINATION</Text>
            </View>
          </Marker>
        </>
      )}

      {/* Route Polyline - Shows route between pickup and destination */}
      {routeCoordinates.length > 1 && (
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#10B981"
          strokeWidth={4}
        />
      )}

      {/* Available Driver Markers - Show drivers with car icon text */}
      {showDrivers && availableDrivers.map((driver) => {
        console.log('🚗 [MAP] Rendering driver marker:', driver.driver_id, 'at', driver.latitude, driver.longitude);
        return (
          <Marker
            key={`driver-${driver.driver_id}`}
            coordinate={{
              latitude: driver.latitude,
              longitude: driver.longitude,
            }}
            title={`Driver (${driver.vehicle_type})`}
            description={driver.rating ? `Rating: ${driver.rating.toFixed(1)} ⭐` : 'Available'}
            identifier={`driver-${driver.driver_id}`}
            rotation={driver.heading || 0}
            flat
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.driverMarker}>
              <Text style={styles.driverMarkerText}>🚗</Text>
            </View>
          </Marker>
        );
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  pickupMarker: {
    backgroundColor: '#059669',
  },
  destinationMarker: {
    backgroundColor: '#DC2626',
  },
  markerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  driverMarker: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  driverMarkerText: {
    fontSize: 22,
  },
  ultraVisiblePickupMarker: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#000000',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  ultraVisibleDestinationMarker: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#000000',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  ultraVisibleMarkerText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
