import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WifiIcon from '../components/Svgs/WifiIcon';
import { Color } from '../constants/Color';
import MWaterIcon from '../components/Svgs/MWaterIcon';
import CafiteriaIcon from '../components/Svgs/CafiteriaIcon';
import PetIcon from '../components/Svgs/PetIcon';
import { moderateScale } from 'react-native-size-matters';

interface FeatureScreenProps {}

const FeatureScreen = (props: FeatureScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row", marginHorizontal:moderateScale(5),
       justifyContent:'space-evenly', alignItems:"center", marginTop:moderateScale(10)}}>
 
     <View style={{alignItems:"center"}}>
        <View style={{backgroundColor:Color.pink, paddingHorizontal:moderateScale(20), paddingVertical:moderateScale(20), borderRadius:10 }}>
        <WifiIcon size={28} color={Color.primary} />
        </View>
        <Text style={{width:80, textAlign:"center"}}>HighSpeed Wifi</Text>
     </View>

     <View style={{alignItems:"center", }}>
        <View style={{backgroundColor:Color.pink, paddingHorizontal:moderateScale(20), paddingVertical:moderateScale(20), borderRadius:10}}>
        <MWaterIcon size={27} color={Color.primary} />
        </View>
        <Text style={{width:80, textAlign:"center"}}>Mineral Water</Text>
     </View>    
     
     <View style={{alignItems:"center", marginBottom:moderateScale(13)}}>
        <View style={{backgroundColor:Color.pink, paddingHorizontal:moderateScale(20),
             paddingVertical:moderateScale(18), borderRadius:10, }}>
        <CafiteriaIcon size={32} color={Color.primary} />
        </View>
        <Text style={{width:80, textAlign:"center"}}>Cafiteria</Text>
     </View> 

     <View style={{alignItems:"center", marginBottom:moderateScale(12) }}>
        <View style={{backgroundColor:Color.pink, paddingHorizontal:moderateScale(20), paddingVertical:moderateScale(18), borderRadius:10}}>
        <PetIcon size={31} color={Color.primary} />
        </View>
        <Text style={{width:80, textAlign:"center"}}>Pet Center</Text>
     </View> 

      </View>


    </View>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: 
  {flex:1}
});
