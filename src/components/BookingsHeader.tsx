import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BookingsLargeIcon from './Svgs/BookingsLargeIcon';
import {Color} from '../constants/Color';
import NotificationIcon from './Svgs/NotificationIcon';
import {moderateScale} from 'react-native-size-matters';

interface BookingsHeaderProps {}

const BookingsHeader = (props: BookingsHeaderProps) => {
  return (
    <View style={{flexDirection: 'row', height: '13%'}}>
      <BookingsLargeIcon
        color1={Color.primary1}
        color2={Color.whiteSecondary}
        size={88}
      />
      <View style={{marginTop: moderateScale(10)}}>
        <Text
          style={{
            fontSize: moderateScale(20),
            color: Color.white,
            fontWeight: 'bold',
          }}>
          My Bookings
        </Text>
        <Text
          style={{
            color: Color.white,
            fontWeight: 'bold',
            fontSize: moderateScale(17),
          }}>
          $ 434
        </Text>
        <Text style={{color: Color.mapColor}}>Balance Remain</Text>
      </View>
      <View
        style={{marginLeft: moderateScale(100), marginTop: moderateScale(17)}}>
        <NotificationIcon color={Color.whiteSecondary} size={24} />
      </View>
    </View>
  );
};

export default BookingsHeader;

const styles = StyleSheet.create({
  container: {},
});
