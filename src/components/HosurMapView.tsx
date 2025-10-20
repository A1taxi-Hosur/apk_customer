import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MapPin } from 'lucide-react-native';

const HOSUR_COORDS = {
  latitude: 12.7402,
  longitude: 77.8240,
};

const HOSUR_REGION = {
  latitude: 12.7402,
  longitude: 77.8240,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

interface HosurMapViewProps {
  currentLocation?: { latitude: number; longitude: number } | null;
  pickupCoords?: { latitude: number; longitude: number } | null;
  destinationCoords?: { latitude: number; longitude: number } | null;
}

// Get Google Maps API key from environment
const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function HosurMapView({ currentLocation, pickupCoords, destinationCoords }: HosurMapViewProps) {
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);

  // Fit map to show both markers when they exist
  useEffect(() => {
    if (mapRef.current && pickupCoords && destinationCoords && mapReady) {
      const coordinates = [pickupCoords, destinationCoords];
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 100, right: 50, bottom: 350, left: 50 },
        animated: true,
      });
    }
  }, [pickupCoords, destinationCoords, mapReady]);

  // Center map on current location when available (and no route is selected)
  useEffect(() => {
    if (mapRef.current && mapReady) {
      if (currentLocation && !pickupCoords && !destinationCoords) {
        // Center on current location
        const region = {
          ...currentLocation,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        setTimeout(() => {
          mapRef.current?.animateToRegion(region, 1000);
        }, 300);
      } else if (!pickupCoords && !destinationCoords) {
        // Fallback to Hosur if no location available
        setTimeout(() => {
          mapRef.current?.animateToRegion(HOSUR_REGION, 1000);
        }, 300);
      }
    }
  }, [currentLocation, mapReady, pickupCoords, destinationCoords]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={HOSUR_REGION}
        showsUserLocation={true}
        showsMyLocationButton={false}
        onMapReady={() => {
          console.log('🗺️ Map ready - setting mapReady to true');
          setMapReady(true);
          // Force animate to Hosur immediately
          setTimeout(() => {
            if (mapRef.current) {
              console.log('🗺️ Forcing initial animation to Hosur');
              mapRef.current.animateToRegion(HOSUR_REGION, 500);
            }
          }, 100);
        }}
        minZoomLevel={10}
        maxZoomLevel={18}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={false}
        rotateEnabled={false}
      >
        {/* Draw route between pickup and destination */}
        {pickupCoords && destinationCoords && GOOGLE_MAPS_API_KEY && (
          <MapViewDirections
            origin={pickupCoords}
            destination={destinationCoords}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor="#2563EB"
            optimizeWaypoints={true}
            onReady={(result) => {
              console.log('🗺️ Route ready:', {
                distance: result.distance,
                duration: result.duration,
              });
            }}
            onError={(errorMessage) => {
              console.error('🗺️ Route error:', errorMessage);
            }}
          />
        )}

        {/* Current location marker - show when no pickup/destination selected */}
        {!pickupCoords && !destinationCoords && currentLocation && (
          <Marker
            coordinate={currentLocation}
            title="Your Location"
            description="Current Location"
          >
            <View style={styles.currentLocationMarker}>
              <View style={styles.currentLocationDot} />
            </View>
          </Marker>
        )}

        {/* Fallback center marker at Hosur - only show when no location data */}
        {!pickupCoords && !destinationCoords && !currentLocation && (
          <Marker
            coordinate={HOSUR_COORDS}
            title="Hosur City Center"
            description="Default Location"
          >
            <View style={styles.centerMarker}>
              <MapPin size={24} color="#DC2626" />
            </View>
          </Marker>
        )}

        {/* Pickup marker */}
        {pickupCoords && (
          <Marker
            coordinate={pickupCoords}
            title="Pickup"
            pinColor="#10B981"
          >
            <View style={styles.pickupMarker}>
              <MapPin size={20} color="#FFFFFF" />
            </View>
          </Marker>
        )}

        {/* Destination marker */}
        {destinationCoords && (
          <Marker
            coordinate={destinationCoords}
            title="Destination"
            pinColor="#EF4444"
          >
            <View style={styles.destMarker}>
              <MapPin size={20} color="#FFFFFF" />
            </View>
          </Marker>
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
  centerMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#DC2626',
    elevation: 5,
  },
  currentLocationMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(37, 99, 235, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    elevation: 5,
  },
  currentLocationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2563EB',
  },
  pickupMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#10B981',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  destMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
