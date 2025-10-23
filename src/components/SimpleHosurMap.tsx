import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q';

const HOSUR_CENTER = {
  latitude: 12.7402,
  longitude: 77.8240,
};

interface Location {
  latitude: number;
  longitude: number;
}

interface Driver {
  driver_id: string;
  latitude: number;
  longitude: number;
  heading?: number;
  vehicle_type?: string;
  rating?: number;
}

interface SimpleHosurMapProps {
  userLocation?: Location | null;
  pickupLocation?: Location | null;
  destinationLocation?: Location | null;
  onRegionChangeComplete?: (coords: Location) => void;
  onDestinationDragEnd?: (coords: Location) => void;
  showCenteredPin?: boolean;
  availableDrivers?: Driver[];
  showDrivers?: boolean;
}

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
  onRegionChangeComplete,
  onDestinationDragEnd,
  showCenteredPin = false,
  availableDrivers = [],
  showDrivers = true,
}: SimpleHosurMapProps) {
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);

  console.log('🗺️ [MAP] Rendering SimpleHosurMap with:', {
    hasUserLocation: !!userLocation,
    hasPickup: !!pickupLocation,
    hasDestination: !!destinationLocation,
    availableDrivers: availableDrivers.length,
    showDrivers,
  });

  // Calculate initial region based on what locations we have
  const getInitialRegion = () => {
    if (pickupLocation && destinationLocation) {
      // Show both pickup and destination
      const minLat = Math.min(pickupLocation.latitude, destinationLocation.latitude);
      const maxLat = Math.max(pickupLocation.latitude, destinationLocation.latitude);
      const minLng = Math.min(pickupLocation.longitude, destinationLocation.longitude);
      const maxLng = Math.max(pickupLocation.longitude, destinationLocation.longitude);

      const latDelta = (maxLat - minLat) * 1.5; // Add padding
      const lngDelta = (maxLng - minLng) * 1.5;

      return {
        latitude: (minLat + maxLat) / 2,
        longitude: (minLng + maxLng) / 2,
        latitudeDelta: Math.max(latDelta, 0.02), // Minimum zoom level
        longitudeDelta: Math.max(lngDelta, 0.02),
      };
    } else if (pickupLocation || userLocation) {
      const location = pickupLocation || userLocation!;
      return {
        ...location,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      };
    } else {
      return {
        ...HOSUR_CENTER,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }
  };

  // Fit map to show route when both locations are available
  useEffect(() => {
    if (mapReady && pickupLocation && destinationLocation && mapRef.current) {
      console.log('🗺️ [MAP] Fitting map to show route');
      mapRef.current.fitToCoordinates(
        [pickupLocation, destinationLocation],
        {
          edgePadding: { top: 100, right: 50, bottom: 300, left: 50 },
          animated: true,
        }
      );
    }
  }, [mapReady, pickupLocation, destinationLocation]);

  const handleMapReady = () => {
    console.log('🗺️ [MAP] Map is ready');
    setMapReady(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={getInitialRegion()}
        showsUserLocation={false}
        showsMyLocationButton={false}
        showsCompass={true}
        showsScale={true}
        loadingEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={false}
        rotateEnabled={true}
        onMapReady={handleMapReady}
        onRegionChangeComplete={(region) => {
          if (showCenteredPin && onRegionChangeComplete) {
            onRegionChangeComplete({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }
        }}
      >
        {/* User/Current Location Marker (Blue Dot) */}
        {userLocation && !pickupLocation && (
          <Marker
            coordinate={userLocation}
            title="Your Location"
            anchor={{ x: 0.5, y: 0.5 }}
            tracksViewChanges={false}
          >
            <View style={styles.userLocationMarker}>
              <View style={styles.userLocationDot} />
            </View>
          </Marker>
        )}

        {/* Pickup Location Marker (Green Pin) */}
        {pickupLocation && (
          <Marker
            coordinate={pickupLocation}
            title="Pickup Location"
            pinColor="green"
            tracksViewChanges={false}
          />
        )}

        {/* Destination Location Marker (Red Pin - Draggable) */}
        {destinationLocation && (
          <Marker
            coordinate={destinationLocation}
            title="Destination"
            pinColor="red"
            draggable={true}
            onDragEnd={(e) => {
              if (onDestinationDragEnd) {
                onDestinationDragEnd(e.nativeEvent.coordinate);
              }
            }}
            tracksViewChanges={false}
          />
        )}

        {/* Route from Pickup to Destination */}
        {pickupLocation && destinationLocation && (
          <MapViewDirections
            origin={pickupLocation}
            destination={destinationLocation}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor="#2563EB"
            optimizeWaypoints={true}
            onReady={(result) => {
              console.log('🗺️ [ROUTE] Route calculated:', {
                distance: result.distance,
                duration: result.duration,
              });
            }}
            onError={(error) => {
              console.error('🗺️ [ROUTE] Error calculating route:', error);
            }}
          />
        )}

        {/* Available Driver Markers (Car Icons) */}
        {showDrivers && availableDrivers.map((driver, index) => {
          console.log(`🚗 [MAP] Rendering driver marker ${index + 1}:`, {
            driver_id: driver.driver_id,
            coordinates: { lat: driver.latitude, lng: driver.longitude },
            heading: driver.heading,
          });

          return (
            <Marker
              key={driver.driver_id}
              coordinate={{
                latitude: driver.latitude,
                longitude: driver.longitude,
              }}
              anchor={{ x: 0.5, y: 0.5 }}
              flat={true}
              rotation={driver.heading || 0}
              tracksViewChanges={false}
            >
              <View style={styles.driverMarker}>
                <View style={[styles.carIcon, { transform: [{ rotate: `${driver.heading || 0}deg` }] }]}>
                  <View style={styles.carBody}>
                    <View style={styles.carTop} />
                    <View style={styles.carBottom} />
                  </View>
                </View>
              </View>
            </Marker>
          );
        })}
      </MapView>

      {/* Centered Pin (Uber-style) - Shows when only pickup is being selected */}
      {showCenteredPin && (
        <View style={styles.centerMarkerContainer} pointerEvents="none">
          <View style={styles.centerMarker}>
            <View style={styles.centerPin} />
            <View style={styles.centerPinShadow} />
          </View>
        </View>
      )}
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
  userLocationMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(37, 99, 235, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLocationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2563EB',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  centerMarkerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  centerMarker: {
    alignItems: 'center',
    marginBottom: 50,
  },
  centerPin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#059669',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  centerPinShadow: {
    width: 16,
    height: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 4,
  },
  driverMarker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carBody: {
    width: 28,
    height: 28,
    backgroundColor: '#1F2937',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  carTop: {
    width: 12,
    height: 8,
    backgroundColor: '#60A5FA',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 2,
  },
  carBottom: {
    width: 20,
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
});
