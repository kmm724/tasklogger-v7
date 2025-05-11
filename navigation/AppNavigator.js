// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppContext } from '../context/AppContext';
import LoginScreen from '../screens/LoginScreen';
import HomeGC from '../screens/HomeGC';
import HomeSupervisor from '../screens/HomeSupervisor';
import HomeLaborer from '../screens/HomeLaborer';
import ManageEmployeesScreen from '../screens/ManageEmployeesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { activeUser } = useAppContext();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {activeUser == null && <Stack.Screen name="Login" component={LoginScreen} />}
        {activeUser?.role === 'gc' && (
          <>
            <Stack.Screen name="HomeGC" component={HomeGC} />
            <Stack.Screen name="ManageEmployees" component={ManageEmployeesScreen} />
          </>
        )}
        {activeUser?.role === 'supervisor' && <Stack.Screen name="HomeSupervisor" component={HomeSupervisor} />}
        {activeUser?.role === 'laborer' && <Stack.Screen name="HomeLaborer" component={HomeLaborer} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
