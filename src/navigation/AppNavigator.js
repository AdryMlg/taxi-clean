import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import DirectorScreen from '../screens/DirectorScreen';
import JefeScreen from '../screens/JefeScreen';
import ConductorScreen from '../screens/ConductorScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Director" component={DirectorScreen} />
        <Stack.Screen name="Jefe" component={JefeScreen} />
        <Stack.Screen name="Conductor" component={ConductorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
