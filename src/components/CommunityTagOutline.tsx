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
    marginHorizontal: 5,
    borderColor: 'brown',
    borderWidth: 1,
    padding:7,
    alignItems:"center",
    borderRadius: 5,
    marginTop:10
  },
  txt: { marginRight:5 },
  image:{width:10, height:10}
});
