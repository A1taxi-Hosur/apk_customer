import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

console.log('🧪🧪🧪 TEST MAP LOADED');
console.log('🧪 Platform:', Platform.OS);
console.log('🧪 react-native-maps version: checking...');

const HOSUR_CENTER = {
  latitude: 12.7402,
  longitude: 77.8240,
};

const TEST_MARKERS = [
  {
    id: 'marker-1',
    coordinate: { latitude: 12.7402, longitude: 77.8240 },
    title: 'Center Marker',
    description: 'This is the center',
    color: '#FF0000',
  },
  {
    id: 'marker-2',
    coordinate: { latitude: 12.7502, longitude: 77.8340 },
    title: 'North East Marker',
    description: 'NE position',
    color: '#00FF00',
  },
  {
    id: 'marker-3',
    coordinate: { latitude: 12.7302, longitude: 77.8140 },
    title: 'South West Marker',
    description: 'SW position',
    color: '#0000FF',
  },
];

export default function SimpleHosurMap(props: any) {
  const mapRef = useRef<MapView>(null);

  console.log('🧪🧪🧪 TEST MAP RENDERING NOW');
  console.log('🧪 Props received:', Object.keys(props || {}));
  console.log('🧪 TEST_MARKERS array length:', TEST_MARKERS.length);

  useEffect(() => {
    console.log('🧪 Map component mounted');
    console.log('🧪 Markers to render:', TEST_MARKERS.length);

    setTimeout(() => {
      console.log('🧪 After 2 seconds - checking map state');
      if (mapRef.current) {
        console.log('🧪 MapView ref exists');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>TEST MAP - {TEST_MARKERS.length} MARKERS</Text>
        <Text style={styles.bannerSubtext}>Red, Green, Blue pins should be visible</Text>
      </View>

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...HOSUR_CENTER,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={false}
        showsMyLocationButton={false}
        showsCompass={true}
        showsScale={true}
        loadingEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        onMapReady={() => {
          console.log('🧪🧪🧪 MAP IS READY');
        }}
        onLayout={() => {
          console.log('🧪 MapView onLayout called');
        }}
      >
        <Marker
          coordinate={{ latitude: 12.7402, longitude: 77.8240 }}
          title="Center Marker"
          description="Red marker at center"
          tracksViewChanges={false}
        />
        <Marker
          coordinate={{ latitude: 12.7502, longitude: 77.8340 }}
          title="North East Marker"
          description="Green marker NE"
          pinColor="green"
          tracksViewChanges={false}
        />
        <Marker
          coordinate={{ latitude: 12.7302, longitude: 77.8140 }}
          title="South West Marker"
          description="Blue marker SW"
          pinColor="blue"
          tracksViewChanges={false}
        />
      </MapView>

      <View style={styles.debugOverlay}>
        <Text style={styles.debugText}>Map Rendered ✓</Text>
        <Text style={styles.debugText}>Markers: {TEST_MARKERS.length}</Text>
        <Text style={styles.debugText}>Provider: GOOGLE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    backgroundColor: '#FFD700',
    padding: 15,
    zIndex: 999,
    borderRadius: 8,
    elevation: 10,
  },
  bannerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerSubtext: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  map: {
    width: width,
    height: height,
    flex: 1,
  },
  debugOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 8,
    zIndex: 999,
  },
  debugText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginVertical: 2,
  },
});
