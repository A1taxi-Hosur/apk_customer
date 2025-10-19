import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
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

export default function HosurMapView({ pickupCoords, destinationCoords }: HosurMapViewProps) {
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [currentRegion, setCurrentRegion] = useState(HOSUR_REGION);

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
      {/* Debug Overlay */}
      <View style={styles.debugOverlay}>
        <Text style={styles.debugText}>📍 Hosur: {HOSUR_COORDS.latitude}, {HOSUR_COORDS.longitude}</Text>
        <Text style={styles.debugText}>🗺️ Map Ready: {mapReady ? 'YES' : 'NO'}</Text>
        <Text style={styles.debugText}>🎯 Center Attempts: {attempts}</Text>
        {pickupCoords && (
          <Text style={styles.debugText}>🅿️ Pickup: {pickupCoords.latitude.toFixed(4)}, {pickupCoords.longitude.toFixed(4)}</Text>
        )}
        {destinationCoords && (
          <Text style={styles.debugText}>🏁 Dest: {destinationCoords.latitude.toFixed(4)}, {destinationCoords.longitude.toFixed(4)}</Text>
        )}
      </View>

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
        {/* Center marker at Hosur */}
        <Marker
          coordinate={HOSUR_COORDS}
          title="Hosur City Center"
          description="Default Location"
        >
          <View style={styles.centerMarker}>
            <MapPin size={24} color="#DC2626" />
          </View>
        </Marker>

        {/* Pickup marker */}
        {pickupCoords && (
          <Marker
            coordinate={pickupCoords}
            title="Pickup"
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
  debugOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 8,
    zIndex: 1000,
  },
  debugText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 4,
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
    width: 36,
    height: 36,
    backgroundColor: '#2563EB',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
  },
  destMarker: {
    width: 36,
    height: 36,
    backgroundColor: '#059669',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
  },
});
