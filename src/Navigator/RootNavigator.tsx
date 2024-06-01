import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import BottomTabNavigation from './BottomTabNavigation';
import AuthNavigator from './AuthNavigater';

interface RootNavigatorProps {}

const RootNavigator = (props: RootNavigatorProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = () => {
    const user = auth().currentUser;
    console.log('currentUser', user);
    if (user) {
      setIsSignedIn(true);
      setIsLoading(false);
    }else{
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : isSignedIn ? (
    <BottomTabNavigation />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;
