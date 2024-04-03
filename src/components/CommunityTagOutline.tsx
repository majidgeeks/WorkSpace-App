import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, TextStyle} from 'react-native';
import { Images } from '../assets/images';

interface CommunityTagOutlineProps {
  text: string;
  style?: TextStyle
}

const CommunityTagOutline: React.FC<CommunityTagOutlineProps> = ({text, style}) => {
  return (

      <TouchableOpacity style={[styles.tOpacity, style]}>
        <Text style={[styles.txt, style]}>{text}</Text>
        <Image source={Images.plusPic} style={styles.image} />
      </TouchableOpacity>
    
  );
};

export default CommunityTagOutline;

const styles = StyleSheet.create({
  tOpacity: {
    flexDirection:"row",
    marginHorizontal: 10,
    borderColor: 'brown',
    borderWidth: 1,
    width: 80,
    padding:7,
    borderRadius: 5,
  },
  txt: {  marginLeft:4, },
  image:{width:10, height:10, marginTop:5, marginLeft:7}
});
