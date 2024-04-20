import * as React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SelectFlowScreen from './src/screens/SelectFlowScreen';
import SelectComScreen from './src/screens/SelectComScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigator/AuthNavigater';
import BottomTabNavigation from './src/Navigator/BottomNavigator';




const App = () => {
  return (
      // <LoginScreen/>
      // <SignUpScreen />
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <BottomTabNavigation />
    </NavigationContainer> 
      // <SelectFlowScreen />
      // <SelectComScreen />
      // <ProfileScreen />
      
  );
};

export default App;

