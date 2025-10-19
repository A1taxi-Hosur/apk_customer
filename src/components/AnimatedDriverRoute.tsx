import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Car, MapPin } from 'lucide-react-native';

const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

interface AnimatedDriverRouteProps {
  driverLocation: { latitude: number; longitude: number };
  customerLocation: { latitude: number; longitude: number };
  driverHeading?: number;
  onRouteReady?: (result: any) => void;
}

export default function AnimatedDriverRoute({
  driverLocation,
  customerLocation,
  driverHeading = 0,
  onRouteReady,
}: AnimatedDriverRouteProps) {
  const mapRef = useRef<MapView>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<any[]>([]);
  const [currentDriverPosition, setCurrentDriverPosition] = useState(driverLocation);
  const prevDriverLocationRef = useRef(driverLocation);

  // Update driver position with smooth animation when location changes
  useEffect(() => {
    const hasLocationChanged =
      Math.abs(driverLocation.latitude - prevDriverLocationRef.current.latitude) > 0.0001 ||
      Math.abs(driverLocation.longitude - prevDriverLocationRef.current.longitude) > 0.0001;

    if (hasLocationChanged) {
      console.log('🚗 [AnimatedRoute] Driver location updated:', driverLocation);
      setCurrentDriverPosition(driverLocation);
      prevDriverLocationRef.current = driverLocation;
    }
  }, [driverLocation]);

  // Fit map to show both driver and customer
  useEffect(() => {
    if (mapRef.current && driverLocation && customerLocation) {
      setTimeout(() => {
        mapRef.current?.fitToCoordinates([driverLocation, customerLocation], {
          edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
          animated: true,
        });
      }, 500);
    }
  }, [driverLocation, customerLocation]);

  const handleRouteReady = (result: any) => {
    if (result.coordinates && result.coordinates.length > 0) {
      setRouteCoordinates(result.coordinates);
      console.log('🗺️ [AnimatedRoute] Route ready with', result.coordinates.length, 'points');
    }
    onRouteReady?.(result);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: (driverLocation.latitude + customerLocation.latitude) / 2,
          longitude: (driverLocation.longitude + customerLocation.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={false}
        showsMyLocationButton={false}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={false}
        rotateEnabled={false}
      >
        {/* Route from driver to customer */}
        <MapViewDirections
          origin={driverLocation}
          destination={customerLocation}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={4}
          strokeColor="#2563EB"
          mode="DRIVING"
          onReady={handleRouteReady}
          onError={(errorMessage) => {
            console.error('MapViewDirections Error:', errorMessage);
          }}
          precision="high"
          timePrecision="now"
        />

        {/* Animated driver marker */}
        <Marker
          coordinate={currentDriverPosition}
          title="Driver"
          rotation={driverHeading}
          anchor={{ x: 0.5, y: 0.5 }}
          flat={true}
        >
          <View style={styles.driverMarker}>
            <Car size={20} color="#FFFFFF" />
          </View>
        </Marker>

        {/* Customer location marker */}
        <Marker
          coordinate={customerLocation}
          title="Pickup Location"
          anchor={{ x: 0.5, y: 1 }}
        >
          <View style={styles.customerMarker}>
            <MapPin size={24} color="#FFFFFF" />
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

// Calculate distance between two coordinates (Haversine formula)
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  driverMarker: {
    width: 44,
    height: 44,
    backgroundColor: '#000000',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FCD34D',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  customerMarker: {
    width: 44,
    height: 56,
    backgroundColor: '#2563EB',
    borderRadius: 22,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
