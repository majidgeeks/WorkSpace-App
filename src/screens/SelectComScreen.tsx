import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header';
import { Images } from '../assets/images';

interface SelectComScreenProps {}

const SelectComScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <Header />
      </ImageBackground>
      <View>
        <Text style={{}}>Safe Space allows belonging </Text>
        <Text>within the community</Text>
      </View>

     

    </View>
  );
};

export default SelectComScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
