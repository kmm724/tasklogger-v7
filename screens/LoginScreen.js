import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function LoginScreen() {
  const { setActiveUser } = useAppContext();

  return (
    <View style={styles.container}>
      <Button
        title="Login as GC"
        onPress={() => setActiveUser({ role: 'gc' })}
      />
      <Button
        title="Login as Supervisor"
        onPress={() => setActiveUser({ role: 'supervisor' })}
      />
      <Button
        title="Login as Laborer"
        onPress={() => setActiveUser({ role: 'laborer' })}
      />
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
