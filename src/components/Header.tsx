import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../assets/images';

interface HeaderProps {}

const Header = () => {
  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 10,
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 50}}
        source={Images.myPic}
      />
      <View style={{marginLeft: 5, marginVertical: 5}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Majid Hussain</Text>
        <Text style={{color: 'white'}}>Crowdbotices</Text>
      </View>
      <TouchableOpacity style={{marginLeft: 160, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
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
