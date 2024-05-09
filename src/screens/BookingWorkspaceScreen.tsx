import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LeftIcon from '../components/Svgs/LeftIcon';
import { moderateScale } from 'react-native-size-matters';
import { Images } from '../assets/images';
import LocationIcon from '../components/Svgs/LocationIcon';
import { Color } from '../constants/Color';
import EditPicIcon from '../components/Svgs/EditPicIcon';
import EditIcon from '../components/Svgs/EditIcon';
import CustomInput from '../components/Input';
import {useForm, Controller} from "react-hook-form"
import PlusIcon from '../components/Svgs/PlusIcon';

interface BookingWorkspaceScreenProps {}

const BookingWorkspaceScreen = (props: BookingWorkspaceScreenProps) => {
  const {control, handleSubmit, formState:{errors},} = useForm({
    defaultValues:{
        email : "",
    },
  })

  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:"row", marginHorizontal:moderateScale(15), marginTop:moderateScale(10)}}>
             <TouchableOpacity>
              <LeftIcon />
            </TouchableOpacity>
            <Text style={{fontSize:moderateScale(18), fontWeight:"500", marginLeft:moderateScale(120)}}>Booking</Text>
      </View>

      <View style={{marginLeft:moderateScale(15), marginTop:moderateScale(10),
         flexDirection:"row", borderBottomWidth:1, borderColor:Color.lightGrey, paddingVertical:moderateScale(15)}}>
        <Image 
        source={Images.WorkspaceImage}
        style={{width:150, height:90, borderRadius:10, backgroundColor:"red"}}
        />
        <View style={{marginLeft:moderateScale(10), justifyContent:"center"}}>
            <Text style={{fontWeight:"bold", fontSize:moderateScale(15) , color:Color.primary}}>Warn Spaces</Text>
            <View style={{flexDirection:"row", marginTop:moderateScale(5)}}>
                <View style={{marginTop:moderateScale(4)}}>
                <LocationIcon color={Color.primary} size={12} />
                </View>
                <Text style={{marginLeft:moderateScale(4), color:Color.black}}>New York</Text>
            </View>
        </View>
      </View>

      <View style={{flexDirection:"row", paddingVertical:moderateScale(10), borderBottomWidth:1, borderColor:Color.lightGrey}}>
        <View style={{flexDirection:"row", marginLeft:moderateScale(10)}}>
        <Image source={Images.moonImage} style={{width:20, height:20, borderRadius:50}} />
        <View style={{position:'absolute', top:0, left:8}}>
        <Image source={Images.myPic} style={{width:20, height:20, borderRadius:50}} /> 
        </View>
        </View>
        <Text style={{marginLeft:moderateScale(20), color:Color.primary}}>04 Connections Invited</Text>
        <View style={{position:"absolute", left:270, bottom:-5, }}>
        <EditIcon />
        </View>
      </View>

      <View>
        <Text>Invite Others</Text>
        <View style={{flexDirection:"row", marginHorizontal:moderateScale(5), }}>
        <Controller
        name='email'
        control={control}
        rules={{
            required:true
        }}
        render={({field:{value, onChange}, fieldState:{error}}) => (
            <>
            <CustomInput
            style={{marginLeft:0, 
            }}
             value={value}
             onChange={onChange}
             placeholder='Enter Email Id' 
            inputContainerStyle={{borderBottomWidth:0}}
           />
          {error?.message? <Text>{error.message}</Text> : null}
            </>
        )}
        />   
        <View style={{ backgroundColor:Color.primary, width:27, height:27, borderRadius:5,}}>
         <PlusIcon />
            </View> 
        </View>
      </View>



    </View>
  );
};

export default BookingWorkspaceScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
