// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectFlowScreen from '../screens/SelectFlowScreen';
import SelectComScreen from '../screens/SelectComScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

function Navigater() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, }}>
        <Stack.Screen  name="Login" component={LoginScreen} options={{
          
        }} />

        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
           
        }} /> 

        <Stack.Screen name="SelectFlow" component={SelectFlowScreen} options={{
          
        }} /> 
        <Stack.Screen name="SelectCommunity" component={SelectComScreen} options={{
          
        }} />
       
       <Stack.Screen name="Profile" component={ProfileScreen} options={{
          title:"Private Information"
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigater;