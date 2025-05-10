import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeLaborer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laborer Dashboard</Text>
      <Text>Welcome, Laborer.</Text>
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
