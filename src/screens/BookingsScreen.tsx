import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Images} from '../assets/images';
import BookingsHeader from '../components/BookingsHeader';
import {Color} from '../constants/Color';
import BookingsModal from '../components/BookingsModal';
import CalendarIcon from '../components/Svgs/CalendarIcon';
import ClockIcon from '../components/Svgs/ClockIcon';

interface BookingsScreenProps {}

const bookingsData = [
  {
    id: 1,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 2,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 3,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 4,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 5,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 6,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 7,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 8,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 9,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 10,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 11,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 12,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 13,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 14,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
  {
    id: 15,
    date: 30,
    month: 'JAN',
    community: 'Warn spaces',
    icon: <ClockIcon color={Color.darkGrey} size={16} />,
    week: 'NEXT WEEK',
    image: Images.myPic,
    duration: '10 Times',
  },
];

const BookingsScreen = (props: BookingsScreenProps) => {
  const [showDatePickerFrom, setShowDatePickerFrom] = useState(false);
  const [showDatePickerTo, setShowDatePickerTo] = useState(false);

  const openDatepickerFrom = () => {
    setShowDatePickerFrom(true);
    console.log('showDatePickerFrom', showDatePickerFrom);
  };

  const openDatepickerTo = () => {
    setShowDatePickerTo(true);
    console.log('showDatePickerTo', showDatePickerTo);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fromDate: new Date(),
      toDate: new Date(),
    },
  });

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
          <Text
            style={{
              marginTop: moderateScale(10),
              marginLeft: moderateScale(15),
            }}>
            I wanna see
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{marginLeft: moderateScale(15)}}>
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
          <View style={[styles.searchView]}>
            {/* from date picker */}
            <Controller
              control={control}
              name="fromDate"
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}}) => (
                <View style={styles.dataPickerView}>
                  <Text
                    style={{
                      fontSize: moderateScale(15),
                      marginLeft: moderateScale(5),
                    }}>
                    {value.toDateString()}
                  </Text>
                  <TouchableOpacity
                    onPress={openDatepickerFrom}
                    style={{marginRight: moderateScale(6)}}>
                    <CalendarIcon size={17} color={Color.primary} />
                  </TouchableOpacity>
                  {showDatePickerFrom ? (
                    <DateTimePicker
                      onChange={selectedDate => {
                        if (selectedDate) {
                          onChange(selectedDate);
                          setShowDatePickerFrom(false);
                        } else {
                          setShowDatePickerFrom(false);
                          onChange(value);
                        }
                      }}
                      value={value}
                      style={{backgroundColor: 'red'}}
                    />
                  ) : null}
                </View>
              )}
            />
            {/* to date picker */}
            <Controller
              control={control}
              name="toDate"
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}}) => (
                <View style={[styles.dataPickerView]}>
                  <Text
                    style={{
                      fontSize: moderateScale(15),
                      marginLeft: moderateScale(10),
                    }}>
                    {value.toDateString()}
                  </Text>
                  <TouchableOpacity onPress={openDatepickerTo} style={{}}>
                    <CalendarIcon size={17} color={Color.primary} />
                  </TouchableOpacity>
                  {showDatePickerTo ? (
                    <DateTimePicker
                      onChange={selectedDate => {
                        if (selectedDate) {
                          onChange(selectedDate);
                          setShowDatePickerTo(false);
                        } else {
                          setShowDatePickerTo(false);
                          onChange(value);
                        }
                      }}
                      value={value}
                      style={{backgroundColor: 'red'}}
                    />
                  ) : null}
                </View>
              )}
            />
          </View>
          <View style={{height: '73%'}}>
            <FlatList
              data={bookingsData}
              renderItem={({item}) => (
                <View style={styles.listView1}>
                  <View
                    style={{
                      backgroundColor: Color.pink,
                      paddingVertical: moderateScale(5),
                      paddingHorizontal: moderateScale(10),
                      borderRadius: 10,
                    }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {item.date}
                    </Text>
                    <Text>{item.month} </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: moderateScale(-25),
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.listView2}>{item.community}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <ClockIcon color={Color.darkGrey} size={16} />
                      <Text> {item.week}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Image
                      source={item.image}
                      style={{width: 20, height: 20, borderRadius: 50}}
                    />
                    <Image
                      source={item.image}
                      style={{width: 20, height: 20, borderRadius: 50}}
                    />
                    <Text>{item.duration} </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  listView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.pink,
    padding: 10,
  },
  listView2: {
    fontWeight: '700',
    color: Color.primary,
    fontSize: moderateScale(15),
    marginVertical: moderateScale(5),
  },
  searchView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.darkBlue,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
    borderRadius: 10,
    paddingVertical: 12,
  },
  //   onlyForRightBorder:{
  //     borderRightColor:"black",
  //     borderRightWidth:3,
  //     flexDirection:"row",
  //     // width:"50%"
  //   },
  dataPickerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '49%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
});
