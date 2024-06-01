import * as React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';


interface ProfilesScreenProps {}

const ProfilesScreen = (props: ProfilesScreenProps) => {

  const signOut = async() => {
    const signedOut = await auth().signOut();
    console.log("user sign out", signedOut);
  }

  return (
    <View style={styles.container}>
      <Text>ProfilesScreen</Text>
      <TouchableOpacity onPress={signOut}
      style={{backgroundColor:"red",
       marginHorizontal:moderateScale(100), padding:moderateScale(10)}}>
        <Text style={{color:'white', textAlign:"center"}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilesScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
