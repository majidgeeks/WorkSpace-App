import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Images} from '../assets/images';

interface CommunityTagFilledProps {
  text: string;
}

const CommunityTagFilled: React.FC<CommunityTagFilledProps> = ({text}) => {
  return (
    <View style={{}}>
      <TouchableOpacity style={[styles.opacityStyle]}>
        <Text style={[styles.textStyle]}>{text}</Text>
        <Image source={Images.crossPic} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default CommunityTagFilled;

const styles = StyleSheet.create({
  opacityStyle: {
    backgroundColor: '#802344',
    borderWidth: 1,
    width:100,
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    
  },
  textStyle: {color: 'white', marginLeft:3,  },
  image: {width: 10, height: 10, marginTop: 5, marginLeft: 9},
});
