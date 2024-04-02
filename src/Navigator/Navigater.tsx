// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectFlowScreen from '../screens/SelectFlowScreen';


const Stack = createNativeStackNavigator();

function Navigater() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SelectFlow" component={SelectFlowScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigater;