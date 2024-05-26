import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Stack = createNativeStackNavigator();
import FeatureScreen from '../screens/FeatureScreen';
import PreviewScreen from '../screens/PreviewScreen';
import AboutScreen from '../screens/AboutScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WorkspaceDetailsScreen from '../screens/WorkspaceDetailsScreen';
import BookingWorkspaceScreen from '../screens/BookingWorkspaceScreen';
import {View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import ExploreScreen from '../screens/ExploreScreen';
import { WorkspaceContext } from '../WorkspaceContext';

const Tab = createMaterialTopTabNavigator();

export const WorkspaceDetailsTabs = () => {
  

  return (
     
    <Tab.Navigator>
      <Tab.Screen name="Features" component={FeatureScreen} />
      <Tab.Screen name="Preview" component={PreviewScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
    
  );
};

function WorkspaceStackNavigation() {
  const [workspaceContextApi, setWorkspaceContextApi] = useState();
  return (
    
    <WorkspaceContext.Provider value={{workspaceContextApi, setWorkspaceContextApi }}>
    <Stack.Navigator>
      <Stack.Screen
        name="Workspaces"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WorkspaceDeatails"
        component={WorkspaceDetailsScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="BookingWorkspace"
        component={BookingWorkspaceScreen}
        options={{headerShown: false}}
      />
       */}
    </Stack.Navigator>
    </WorkspaceContext.Provider>
    
  );
}

export default WorkspaceStackNavigation;
