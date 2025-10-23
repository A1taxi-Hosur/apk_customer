import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
      >
        <Marker
          coordinate={{ latitude: 12.7402, longitude: 77.8240 }}
          title="Test Marker"
          description="Testing"
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
