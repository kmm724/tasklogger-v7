import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function LoginScreen({ navigation }) {
  const { setActiveUser } = useAppContext();

  const handleLogin = (role) => {
    setActiveUser({ name: role, role });
    if (role === 'GC') {
      navigation.navigate('HomeGC');
    } else if (role === 'Supervisor') {
      navigation.navigate('HomeSupervisor');
    } else {
      navigation.navigate('HomeLaborer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TaskLogger</Text>
      <Button title="Login as General Contractor" onPress={() => handleLogin('GC')} />
      <Button title="Login as Supervisor" onPress={() => handleLogin('Supervisor')} />
      <Button title="Login as Laborer" onPress={() => handleLogin('Laborer')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
