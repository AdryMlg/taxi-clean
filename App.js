import 'react-native-gesture-handler';  // 👈 OBLIGATORIO para React Navigation (primera línea)
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
