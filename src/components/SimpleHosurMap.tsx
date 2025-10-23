import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

console.log('🧪🧪🧪 TEST MAP LOADED');

export default function SimpleHosurMap(props: any) {
  console.log('🧪🧪🧪 TEST MAP RENDERING NOW');
  console.log('🧪 Props received:', Object.keys(props || {}));

  return (
    <View style={styles.container}>
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
    top: 60,
    left: 10,
    right: 10,
    backgroundColor: '#00FF00',
    padding: 12,
    zIndex: 10000,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 6,
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
});
