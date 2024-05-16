import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {moderateScale} from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import FilterIcon from '../components/Svgs/FilterIcon';
import {Color} from '../constants/Color';
import NotificationIcon from '../components/Svgs/NotificationIcon';
import LocationIcon from '../components/Svgs/LocationIcon';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from '../components/Svgs/CalendarIcon';
import DownArrowIcon from '../components/Svgs/DownArrowIcon';
import {Images} from '../assets/images';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';
import FavouriteFilledIcon from '../components/Svgs/FavouriteFilledIcon';

interface EploreScreenProps {}

const spaces = [
  {
    id: 1,
    image: Images.image1,
    title: 'Warn Spaces',
    favourity: <FavouritesIcon size={30} color={Color.darkGrey} />,
    gender: 'Female only ,',
    community: 'LGBTQ',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 2,
    image: Images.image1,
    title: 'Warn Spaces',
    favourity: <FavouritesIcon size={30} color={Color.darkGrey} />,
    gender: 'Female only ,',
    community: 'LGBTQ',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 3,
    image: Images.image1,
    title: 'Warn Spaces',
    favourity: <FavouritesIcon size={30} color={Color.darkGrey} />,
    gender: 'Female only ,',
    community: 'LGBTQ',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 4,
    image: Images.image1,
    title: 'Warn Spaces',
    favourity: <FavouritesIcon size={30} color={Color.darkGrey} />,
    gender: 'Female only ,',
    community: 'LGBTQ',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
];

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
  const [selectFavourite, setSelectFavourite] = useState<number[]>([])

  const openDatepicker = () => {
    setShowDatePicker(true);
  };

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

  const handleSelect = (index : number) => {
     const updatedArray = [...selectFavourite];
     updatedArray.push(index);
     setSelectFavourite(updatedArray);
     console.log("selectFavourite added",selectFavourite);
  }

  const handleUnSelect = (index : number) => {
    const updatedArray = [...selectFavourite];
    updatedArray.splice(index, 1);
    setSelectFavourite(updatedArray);
    console.log("selectFavourite spliced",selectFavourite);

  }

  return (
    <View style={styles.container}>
      <View style={{height: '12%', padding: moderateScale(10)}}>
        <Text>I’m looking for</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '99%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.workSpaceTxt}>Workspaces</Text>
            <DownArrowIcon size={12} color={Color.darkBlue} />
          </TouchableOpacity>
          <View style={styles.header2View}>
            <FilterIcon size={25} color={Color.darkGrey} />
            <NotificationIcon size={24} color={Color.darkGrey} />
          </View>
        </View>
      </View>
      <View style={styles.searchView}>
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
            <View style={styles.dataPickerView}>
              <Text style={{fontSize: moderateScale(15)}}>
                {value.toDateString()}
              </Text>
              <TouchableOpacity onPress={openDatepicker}>
                <CalendarIcon size={17} color={Color.primary} />
              </TouchableOpacity>
              {showDatePicker ? (
                <DateTimePicker
                  onChange={selectedDate => {
                    if (selectedDate) {
                      onChange(selectedDate);
                      setShowDatePicker(false);
                    } else {
                      setShowDatePicker(false);
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
      <View style={{height: '81%'}}>
        <View style={{marginTop: moderateScale(4)}}>
          <Image resizeMode="cover" source={Images.mapImag} />
        </View>
        {/* card start here */}
        <FlatList
          style={{backgroundColor: 'white'}}
          data={spaces}
          renderItem={({item, index}) => (
            <View style={styles.flatListView}>
              <Image style={{width: '100%'}} source={item.image} />
              <View style={styles.flatlistView2}>
                <Text style={styles.titleTxt}>{item.title}</Text>
                { selectFavourite.includes(index) ? (
                  <TouchableOpacity onPress={()=>handleUnSelect(index)}>
                  <FavouriteFilledIcon size={30} color={Color.primary} />
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity onPress={()=>handleSelect(index)}>
                <FavouritesIcon size={30} color={Color.darkGrey} />
                </TouchableOpacity>
                  )
                }
              </View>
              <View style={styles.cardBottomParent}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                    borderRightWidth: 1,
                  }}>
                  <Text>{item.gender}</Text>
                  <Text style={{marginLeft: moderateScale(5)}}>
                    {item.community}
                  </Text>
                </View>
                <View style={styles.cardView3}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 20, height: 20, borderRadius: 50}}
                      source={item.usersImage}
                    />
                    <Image
                      style={{width: 20, height: 20, borderRadius: 50}}
                      source={item.usersImage}
                    />
                  </View>
                  <Text>{item.cb}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={index => `${index.id}`}
        />
        {/* card ends here */}
      </View>
    </View>
  );
};

export default EploreScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  workSpaceTxt: {
    fontSize: moderateScale(19),
    paddingRight: moderateScale(4),
    color: Color.primary,
    borderBottomWidth: 2,
    borderBottomColor: Color.primary,
    borderStyle: 'dotted',
  },
  header2View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginRight: moderateScale(10),
  },
  searchView: {
    height: '7%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.darkBlue,
    marginHorizontal: moderateScale(10),
    borderRadius: 10,
  },
  dropdown: {
    borderRightWidth: 1,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: moderateScale(20),
    width: 170,
  },
  placeholderStyle: {
    fontSize: moderateScale(16),
  },
  selectedTextStyle: {
    fontSize: moderateScale(18),
  },
  dataPickerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '48%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  flatListView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: 'blue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: moderateScale(30),
    backgroundColor: 'white',
    marginLeft: moderateScale(14),
    width: '92%',
    padding: moderateScale(10),
  },
  flatlistView2: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(5),
    marginTop: moderateScale(-10),
  },
  titleTxt: {
    color: Color.primary,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginLeft: moderateScale(10),
  },
  cardBottomParent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    marginTop: moderateScale(-5),
  },
  cardView3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginRight: moderateScale(10),
  },
});
