import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

console.log('🧪🧪🧪 TEST MAP LOADED');

export default function SimpleHosurMap(props: any) {
  console.log('🧪🧪🧪 TEST MAP RENDERING NOW');
  console.log('🧪 Props received:', Object.keys(props || {}));

  return (
    <View style={styles.container}>
      <View style={styles.testOverlay}>
        <Text style={styles.testText}>MAP COMPONENT IS RENDERING</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>TEST MAP - ONE MARKER</Text>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 12.7402,
          longitude: 77.8240,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={false}
        showsMyLocationButton={false}
        loadingEnabled={true}
        zoomEnabled={true}
      >
        <Marker
          key="test-marker-1"
          identifier="test-marker-1"
          coordinate={{
            latitude: 12.7402,
            longitude: 77.8240
          }}
          title="Center Marker"
          description="Testing"
          pinColor="red"
          flat={false}
          zIndex={1000}
        />
        <Marker
          key="test-marker-2"
          identifier="test-marker-2"
          coordinate={{
            latitude: 12.7502,
            longitude: 77.8340
          }}
          title="North East Marker"
          pinColor="green"
          flat={false}
          zIndex={999}
        />
        <Marker
          key="test-marker-3"
          identifier="test-marker-3"
          coordinate={{
            latitude: 12.7302,
            longitude: 77.8140
          }}
          title="South West Marker"
          pinColor="blue"
          flat={false}
          zIndex={998}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: '#00FF00',
    padding: 20,
    zIndex: 999999,
    borderWidth: 5,
    borderColor: '#FF0000',
    borderRadius: 8,
    elevation: 100,
  },
  bannerText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: width,
    height: height,
    flex: 1
  },
  testOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    zIndex: 1000000,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  testText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    padding: 20,
  },
});
