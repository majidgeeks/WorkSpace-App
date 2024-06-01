import * as React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SelectFlowScreen from './src/screens/SelectFlowScreen';
import SelectComScreen from './src/screens/SelectComScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigator/AuthNavigater';
import BottomTabNavigation from './src/Navigator/BottomTabNavigation';
import PreviewScreen from './src/screens/PreviewScreen';
import FeatureScreen from './src/screens/FeatureScreen';
import AboutScreen from './src/screens/AboutScreen';
import WorkspaceDetailsScreen from './src/screens/WorkspaceDetailsScreen';
import WorkspaceStackNavigation from './src/Navigator/WorkspaceStackNavigation';
import FeedBackScreen from './src/screens/FeedBackScreen';
import RootNavigator from './src/Navigator/RootNavigator';




const App = () => {
  return (
      // <LoginScreen/>
      // <SignUpScreen />
      // <FeedBackScreen />
      // <AboutScreen />
      // <FeatureScreen />
      // <PreviewScreen />
      <NavigationContainer>
        {/* <WorkspaceStackNavigation /> */}
         {/* <AuthNavigator />    */}
         <RootNavigator />
          {/* <BottomTabNavigation />     */}
      </NavigationContainer>   
      // <SelectFlowScreen />
      // <SelectComScreen />
      // <ProfileScreen />
      
  );
};

export default App;

