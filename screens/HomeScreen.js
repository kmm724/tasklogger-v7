// /screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default function HomeScreen() {
  const { activeUser, setActiveUser } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Welcome to TaskLogger</Text>
      <Button title="Login as GC" onPress={() => setActiveUser({ role: 'GC' })} />
      <Button title="Login as Supervisor" onPress={() => setActiveUser({ role: 'Supervisor' })} />
      <Button title="Login as Laborer" onPress={() => setActiveUser({ role: 'Laborer' })} />
      {activeUser && <Text>Logged in as: {activeUser.role}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

