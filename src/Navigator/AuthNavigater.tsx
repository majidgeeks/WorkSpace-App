// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectFlowScreen from '../screens/SelectFlowScreen';
import SelectComScreen from '../screens/SelectComScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeftIcon from '../components/Svgs/LeftIcon';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line prettier/prettier
function AuthNavigator() {
  // eslint-disable-next-line prettier/prettier
  return (
    // eslint-disable-next-line prettier/prettier
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{}} />

      <Stack.Screen name="SignUp" component={SignUpScreen} options={{}} />

      <Stack.Screen
        name="SelectFlow"
        component={SelectFlowScreen}
        options={{}}

      />
      <Stack.Screen
        name="SelectCommunity"
        component={SelectComScreen}
        options={{}}


      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Private Information',
          headerTitleAlign: 'center',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <LeftIcon />
            </TouchableOpacity>
          ),


        }} />



    </Stack.Navigator>
  );
}

export default AuthNavigator;
