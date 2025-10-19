import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { MapPin } from 'lucide-react-native';
import { HOSUR_COORDINATES } from '../config/maps';
import { AvailableDriver } from '../services/driverLocationService';

interface SimpleMapViewProps {
  currentLocation?: { latitude: number; longitude: number } | null;
  pickupCoords?: { latitude: number; longitude: number } | null;
  destinationCoords?: { latitude: number; longitude: number } | null;
  availableDrivers?: AvailableDriver[];
  showRoute?: boolean;
  onMapReady?: () => void;
}

export default function SimpleMapView({
  currentLocation,
  pickupCoords,
  destinationCoords,
  availableDrivers = [],
  showRoute = false,
  onMapReady,
}: SimpleMapViewProps) {
  const mapRef = useRef<MapView>(null);
  const [isReady, setIsReady] = useState(false);

  // Determine initial region - priority: pickupCoords > currentLocation > Hosur
  const getInitialRegion = (): Region => {
    if (pickupCoords) {
      console.warn('📍 [SimpleMap] Using pickup coords:', pickupCoords);
      return {
        latitude: pickupCoords.latitude,
        longitude: pickupCoords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }

    if (currentLocation) {
      console.warn('📍 [SimpleMap] Using current location:', currentLocation);
      return {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }

    console.warn('📍 [SimpleMap] Using Hosur default:', HOSUR_COORDINATES);
    return HOSUR_COORDINATES;
  };

  const initialRegion = getInitialRegion();

  useEffect(() => {
    console.warn('🗺️ [SimpleMap] Component mounted');
    console.warn('🗺️ [SimpleMap] Initial region:', JSON.stringify(initialRegion));
  }, []);

  // Handle map ready
  const handleMapReady = () => {
    console.warn('✅ [SimpleMap] Map is ready!');
    setIsReady(true);

    // Force center on initial region after a short delay
    setTimeout(() => {
      if (mapRef.current) {
        console.warn('🎯 [SimpleMap] Animating to initial region');
        mapRef.current.animateToRegion(initialRegion, 1000);
      }
    }, 500);

    onMapReady?.();
  };

  // Auto-fit map when markers change
  useEffect(() => {
    if (!isReady || !mapRef.current) return;

    const coordinates: Array<{ latitude: number; longitude: number }> = [];

    if (pickupCoords) coordinates.push(pickupCoords);
    if (destinationCoords) coordinates.push(destinationCoords);
    if (currentLocation && !pickupCoords) coordinates.push(currentLocation);

    console.warn('🗺️ [SimpleMap] Coordinates to fit:', coordinates.length);

    if (coordinates.length > 1) {
      // Fit multiple markers
      setTimeout(() => {
        mapRef.current?.fitToCoordinates(coordinates, {
          edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
          animated: true,
        });
      }, 300);
    } else if (coordinates.length === 1) {
      // Center on single marker
      setTimeout(() => {
        mapRef.current?.animateToRegion({
          ...coordinates[0],
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }, 1000);
      }, 300);
    }
  }, [isReady, pickupCoords, destinationCoords, currentLocation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={true}
        onMapReady={handleMapReady}
        mapType="standard"
        minZoomLevel={8}
        maxZoomLevel={20}
      >
        {/* Current Location Marker - only show if no pickup coords */}
        {currentLocation && !pickupCoords && (
          <Marker
            coordinate={currentLocation}
            title="Your Location"
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.currentLocationMarker}>
              <View style={styles.currentLocationPulse} />
              <View style={styles.currentLocationDot} />
            </View>
          </Marker>
        )}

        {/* Pickup Marker */}
        {pickupCoords && (
          <Marker
            coordinate={pickupCoords}
            title="Pickup Location"
            anchor={{ x: 0.5, y: 1 }}
          >
            <View style={[styles.markerContainer, styles.pickupMarker]}>
              <MapPin size={16} color="#FFFFFF" />
            </View>
          </Marker>
        )}

        {/* Destination Marker */}
        {destinationCoords && (
          <Marker
            coordinate={destinationCoords}
            title="Destination"
            anchor={{ x: 0.5, y: 1 }}
          >
            <View style={[styles.markerContainer, styles.destinationMarker]}>
              <MapPin size={16} color="#FFFFFF" />
            </View>
          </Marker>
        )}

        {/* Available Drivers */}
        {availableDrivers.map((driver) => (
          <Marker
            key={`driver_${driver.driver_id}`}
            coordinate={{
              latitude: driver.latitude,
              longitude: driver.longitude,
            }}
            title={`${driver.vehicle_type} Driver`}
            description={`Rating: ${driver.rating} ⭐`}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.driverMarker}>
              <View style={styles.carIcon}>
                <MapPin size={16} color="#2563EB" />
              </View>
            </View>
          </Marker>
        ))}

        {/* Simple route line */}
        {showRoute && pickupCoords && destinationCoords && (
          <Polyline
            coordinates={[pickupCoords, destinationCoords]}
            strokeColor="#2563EB"
            strokeWidth={4}
            lineDashPattern={[1]}
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
  currentLocationMarker: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentLocationPulse: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(37, 99, 235, 0.2)',
    borderWidth: 2,
    borderColor: 'rgba(37, 99, 235, 0.4)',
  },
  currentLocationDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  markerContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  pickupMarker: {
    backgroundColor: '#DC2626',
  },
  destinationMarker: {
    backgroundColor: '#059669',
  },
  driverMarker: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2563EB',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
