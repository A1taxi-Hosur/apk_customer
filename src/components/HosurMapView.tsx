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
  pickupCoords?: { latitude: number; longitude: number } | null;
  destinationCoords?: { latitude: number; longitude: number } | null;
}

// Get Google Maps API key from environment
const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function HosurMapView({ pickupCoords, destinationCoords }: HosurMapViewProps) {
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [currentRegion, setCurrentRegion] = useState(HOSUR_REGION);

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

  const forceHosurCenter = () => {
    if (mapRef.current) {
      setAttempts(prev => prev + 1);
      setCurrentRegion(HOSUR_REGION);
      mapRef.current.animateToRegion(HOSUR_REGION, 300);
    }
  };

  // FIX: Start centering immediately on mount, don't wait for onMapReady
  useEffect(() => {
    // Set ready immediately
    const immediateTimer = setTimeout(() => {
      setMapReady(true);
    }, 100);

    return () => clearTimeout(immediateTimer);
  }, []);

  useEffect(() => {
    if (mapReady) {
      // Force center 8 times with more aggressive timing
      const timers = [
        setTimeout(forceHosurCenter, 100),
        setTimeout(forceHosurCenter, 300),
        setTimeout(forceHosurCenter, 500),
        setTimeout(forceHosurCenter, 800),
        setTimeout(forceHosurCenter, 1000),
        setTimeout(forceHosurCenter, 1500),
        setTimeout(forceHosurCenter, 2000),
        setTimeout(forceHosurCenter, 3000),
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, [mapReady]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={currentRegion}
        showsUserLocation={false}
        showsMyLocationButton={false}
        onMapReady={() => {
          console.log('🗺️ onMapReady fired!');
          setMapReady(true);
        }}
        onLayout={() => {
          console.log('📐 onLayout fired - map laid out');
          setTimeout(() => setMapReady(true), 200);
        }}
        onRegionChangeComplete={(region) => {
          setCurrentRegion(region);
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

        {/* Center marker at Hosur - only show when no pickup/destination selected */}
        {!pickupCoords && !destinationCoords && (
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
