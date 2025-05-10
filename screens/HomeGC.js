import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeGC() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GC Dashboard</Text>
      <Text>Welcome, General Contractor.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
