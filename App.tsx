import * as React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SelectFlowScreen from './src/screens/SelectFlowScreen';
import SelectComScreen from './src/screens/SelectComScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigator/AuthNavigater';
import BottomTabNavigation from './src/Navigator/BottomNavigator';
import PreviewScreen from './src/screens/PreviewScreen';
import FeatureScreen from './src/screens/FeatureScreen';




const App = () => {
  return (
      // <LoginScreen/>
      // <SignUpScreen />
      <FeatureScreen />
      // <PreviewScreen />
    // <NavigationContainer>
      // {/* <AuthNavigator /> */}
      // {/* <BottomTabNavigation /> */}
    // {/* </NavigationContainer>  */}
      // <SelectFlowScreen />
      // <SelectComScreen />
      // <ProfileScreen />
      
  );
};

export default App;

