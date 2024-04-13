// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectFlowScreen from '../screens/SelectFlowScreen';
import SelectComScreen from '../screens/SelectComScreen';


const Stack = createNativeStackNavigator();

function Navigater() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, }}>
        <Stack.Screen  name="Login" component={LoginScreen} options={{
          statusBarHidden:true,
        }} />

        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
           statusBarHidden:true,
        }} /> 

        <Stack.Screen name="SelectFlow" component={SelectFlowScreen} options={{
          statusBarHidden:true,
        }} /> 
        <Stack.Screen name="SelectCommunity" component={SelectComScreen} options={{
          statusBarHidden:true,
        }} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigater;