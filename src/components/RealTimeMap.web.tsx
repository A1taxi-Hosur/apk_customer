import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function RealTimeMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Real-time Map (Web Preview)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#6B7280',
  },
});
