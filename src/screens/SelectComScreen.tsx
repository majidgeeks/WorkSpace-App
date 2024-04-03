import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header';
import { Images } from '../assets/images';
import { TouchableOpacity } from 'react-native';
import CommunityTagFilled from '../components/CommunityTagFilled';
import CommunityTagOutline from '../components/CommunityTagOutline';

interface SelectComScreenProps {}

const SelectComScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <Header />
      
      <View style={styles.header1}>
        <Text style={{textAlign:"center", marginTop:20, fontWeight:"500", color:"black"}}>Safe Space allows belonging </Text>
        <Text style={{textAlign:"center", fontWeight:"500", color:"black"}}>within the community</Text>
     
     <View style={{flexDirection:"row", marginHorizontal:90}}>
     <CommunityTagFilled  text='LGBTQ'/>
     <CommunityTagOutline text='BIPOC' />
     </View>
     <View style={{flexDirection:"row", marginHorizontal:90, marginTop:10}}>
     <CommunityTagOutline text='CREATIVES' style={{width:90}} />
     <CommunityTagOutline text='PARENTS' />
     </View>

     
      </View>
      </ImageBackground>
    </View>
  );
};

export default SelectComScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
});
