import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FilterIcon from '../components/Svgs/FilterIcon';
import {Color} from '../constants/Color';
import NotificationIcon from '../components/Svgs/NotificationIcon';
import {useForm, Controller} from 'react-hook-form';
import {Dropdown} from 'react-native-element-dropdown';
import LocationIcon from '../components/Svgs/LocationIcon';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';
import CalendarIcon from '../components/Svgs/CalendarIcon';
import DownArrowIcon from '../components/Svgs/DownArrowIcon';
import MapImageSvg from '../components/Svgs/MapImageSvg';
import {Images} from '../assets/images';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';

interface EploreScreenProps {}

const countries = [
  {
    label: 'Pakistan',
    value: '001',
  },
  {
    label: 'Usa',
    value: '002',
  },
];

const EploreScreen = (props: EploreScreenProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      location: '',
      date: new Date(),
    },
  });

  return (
    <View style={styles.container}>
      <View style={{height: '12%', padding: 10}}>
        <Text>I’m looking for</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '99%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: moderateScale(19),
                paddingRight: moderateScale(4),
                color: Color.primary,
                borderBottomWidth: 2,
                borderBottomColor: Color.primary,
                borderStyle: 'dotted',
              }}>
              Workspaces
            </Text>
            <DownArrowIcon size={12} color={Color.darkBlue} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '20%',
              marginRight: 10,
            }}>
            <FilterIcon size={25} color={Color.darkGrey} />
            <NotificationIcon size={24} color={Color.darkGrey} />
          </View>
        </View>
      </View>

      <View
        style={{
          height: '7%',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: Color.darkBlue,
          marginHorizontal: moderateScale(10),
          borderRadius: 10,
        }}>
        <Controller
          name="location"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <>
              <Dropdown
                style={styles.dropdown}
                iconStyle={{backgroundColor: 'yellow'}}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                // containerStyle={{backgroundColor:"red", }}
                data={countries}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={value}
                onChange={onChange}
                renderRightIcon={() => {
                  return <LocationIcon color={Color.primary} size={16} />;
                }}
              />
              {error?.message ? <Text>{error.message}</Text> : null}
            </>
          )}
        />
        <Controller
          control={control}
          name="date"
          rules={{
            required: true,
          }}
          render={({field: {value, onChange}}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '48%',
                alignItems: 'center',
                paddingHorizontal: moderateScale(5),
              }}>
              <Text style={{fontSize: moderateScale(15)}}>21 Apr 2024</Text>
              <CalendarIcon size={17} color={Color.primary} />
              {showDatePicker ? (
                <DateTimePicker
                  onChange={onChange}
                  value={value}
                  // mode='date'
                  // display='calendar'
                  style={{backgroundColor: 'red'}}
                />
              ) : null}
            </View>
          )}
        />
      </View>

      <View style={{height: '81%',}}>
        <View style={{marginVertical: moderateScale(5)}}>
          <Image style={{}} resizeMode="cover" source={Images.mapImag} />
        </View>
          {/* card start here */}
        <View style={{borderBottomLeftRadius:1, borderBottomColor:"blue", marginTop:moderateScale(-5) }}>
          <Image 
          source={Images.image1}
          />
          <View style={{flexDirection:"row", width:"94%", justifyContent:"space-between", marginHorizontal:moderateScale(5), marginTop:moderateScale(-10)}}>
            <Text style={{color:Color.primary, fontSize:moderateScale(16), fontWeight:"bold", marginLeft:moderateScale(10), }}>Warn Spaces</Text>
           <FavouritesIcon  size={30} color={Color.darkGrey} />
          </View>
           <View style={{flexDirection:"row", justifyContent:"space-around", width:"95%",  marginTop:moderateScale(-5) }}>

            <View style={{flexDirection:"row", backgroundColor:"green", width:"50%", borderRightWidth:1}}>
              <Text>Female only,</Text>
              <Text style={{marginLeft:moderateScale(5)}}>LGBTQ +2</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", backgroundColor:"red", width:"30%", marginRight:moderateScale(10)}}>
              <View style={{flexDirection:"row", }}>
              <Image 
              style={{width:20, height:20, borderRadius:50}}
              source={Images.moonImage}
              />
              <Image 
              style={{width:20, height:20, borderRadius:50,}}
              source={Images.moonImage}
              />
              </View>
              <Text>CB 10+</Text>
            </View>

           </View>
        </View>
        {/* card ends here */}
      </View>
    </View>
  );
};

export default EploreScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  dropdown: {
    borderRightWidth: 1,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 20,
    width: 170,
  },
  placeholderStyle: {
    fontSize: 16,
    // backgroundColor:"red"
  },
  selectedTextStyle: {
    fontSize: 18,
  },
});
