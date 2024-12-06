import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import BottomTabNavigation from './BottomTabNavigation';
import AuthNavigator from './AuthNavigater';
import firestore from '@react-native-firebase/firestore';
import OnBoardingNavigator from './OnBoardingNavigator';

interface RootNavigatorProps {}

const RootNavigator = (props: RootNavigatorProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [onBoarding, setOnBoarding] = useState(false);

  const getUser = () => {
    const user = auth().currentUser;
    console.log('currentUser', user);
    if (user) {
      setIsSignedIn(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
    auth().onAuthStateChanged(user => {
      if (user) {
        firestore()
          .collection('Users')
          // Filter results
          .where('userId', '==', user.uid)
          .get()
          .then(querySnapshot => {
            console.log('querySnapshot', querySnapshot.docs[0]?.data().flow);
            if (querySnapshot.docs[0]?.data().flow?.length) {
              setOnBoarding(true);
            } else {
              setOnBoarding(false);
            }
          });
        // signed
        setIsSignedIn(true);
      } else {
        // logout
        setIsSignedIn(false);
      }
    });
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  } else if (isSignedIn && onBoarding) {
    return <BottomTabNavigation />;
  } else if (isSignedIn && !onBoarding) {
    return <OnBoardingNavigator />;
  } else {
    return <AuthNavigator />;
  }

  // return isLoading ? (
  //   <ActivityIndicator />
  // ) : isSignedIn && onBoarding ? (
  //   <BottomTabNavigation />
  // ) : (
  //   <AuthNavigator />
  // );
};

export default RootNavigator;
