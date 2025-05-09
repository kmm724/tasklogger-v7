// App.js
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
