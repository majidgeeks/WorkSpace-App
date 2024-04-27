import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Images} from '../assets/images';
import BookingsHeader from '../components/BookingsHeader';
import {moderateScale} from 'react-native-size-matters';
import UpcomingIcon from '../components/Svgs/UpcomingIcon';
import {Color} from '../constants/Color';
import BookingsModal from '../components/BookingsModal';
// import {useForm, Controller} from "react-hook-form";

interface BookingsScreenProps {}

const BookingsScreen = (props: BookingsScreenProps) => {
  // const {control, handleSubmit, formState:{errors}} = useForm({
  //     defaultValues: {
  //       dropDown : ""
  //     }
  //    })

  const UpComing = (): any => {
    <View style={{flexDirection: 'row'}}>
      <View>
        <Text>Upcoming</Text>
        <Text>Next Bookings from today</Text>
      </View>
      <UpcomingIcon color={Color.primary} size={29} />
    </View>;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <BookingsHeader />
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text style={{marginTop:moderateScale(10), marginLeft:moderateScale(15)}}>I wanna see</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
             <View style={{marginLeft:moderateScale(15)}}>
            <BookingsModal />
                </View>   
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '900',
                marginTop: moderateScale(5),
                marginRight: moderateScale(15),
              }}>
              04
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  dropdown: {
    marginTop: moderateScale(32),
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    width: 150,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
