import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../assets/images';
import {moderateScale} from 'react-native-size-matters';

interface HeaderProps {}

const Header = () => {
  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        marginHorizontal: moderateScale(10),
        paddingVertical: 10,
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 50}}
        source={Images.myPic}
      />
      <View
        style={{
          marginLeft: moderateScale(5),
          marginVertical: moderateScale(5),
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Majid Hussain</Text>
        <Text style={{color: 'white'}}>Crowdbotices</Text>
      </View>
      <TouchableOpacity
        style={{marginLeft: moderateScale(160), marginTop: moderateScale(10)}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: moderateScale(15),
          }}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
