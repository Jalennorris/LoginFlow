import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import LoginScreen from './ LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />  
        <Stack.Screen name="Register" component={RegisterScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
