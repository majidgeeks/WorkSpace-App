import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {Images} from '../assets/images';

interface CommunityTagFilledProps {
  text: string;
}

const CommunityTagFilled: React.FC<CommunityTagFilledProps> = ({text}) => {
  return (
    <TouchableOpacity style={[styles.opacityStyle]}>
      <Text style={[styles.text]}>{text}</Text>
      <Image source={Images.crossPic} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CommunityTagFilled;

const styles = StyleSheet.create({
  opacityStyle: {
    backgroundColor: '#802344',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    marginTop:10,
    marginHorizontal:2
  },
  text: {color: 'white', marginLeft: 3},
  image: {width: 10, height: 10, marginTop: 5, marginLeft: 9},
});
