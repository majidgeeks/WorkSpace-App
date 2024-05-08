import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AdressIcon from '../components/Svgs/AdressIcon';
import {Color} from '../constants/Color';
import MapImage1 from '../components/Svgs/MapImage1';
import {Images} from '../assets/images';
import CorrectSignIcon from '../components/Svgs/CorrectSignIcon';
import {WorkspaceDetailsTabs} from '../Navigator/PractiseNavigator';
import LocationIcon from '../components/Svgs/LocationIcon';
import LeftIcon from '../components/Svgs/LeftIcon';
import ChatIcon from '../components/Svgs/ChatIcon';
import FavouriteFilledIcon from '../components/Svgs/FavouriteFilledIcon';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';
import CalendarIcon from '../components/Svgs/CalendarIcon';
import { useNavigation } from '@react-navigation/native';

interface WorkspaceDetailsScreenProps {}

const userImages = [
  {
    id: 1,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 2,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 3,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 4,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 5,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 6,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 7,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 8,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
];

const WorkspaceDetailsScreen = (props: WorkspaceDetailsScreenProps) => {
  const navigation = useNavigation();
  const [favourite, setFavourite] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number[]>([]);

  const toggleFavourite = () => {
    setFavourite(previous => !previous);
    console.log(favourite);
  };

  const selected = (index: number): void => {
    const updatedArray = [...selectedImage];
    updatedArray.push(index);
    console.log('updatedArray(beforeSet)', updatedArray);
    setSelectedImage(updatedArray);
    console.log('updatedArray(afterSet)', updatedArray);
  };

  const unSelect = (index: number): void => {
    const updatedArray = [...selectedImage];
    updatedArray.splice(index, 1);
    console.log('updatedArray(beforeSet)', updatedArray);
    setSelectedImage(updatedArray);
    console.log('updatedArray(afterSet)', updatedArray);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{}} nestedScrollEnabled={true}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(10),
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(10),
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <LeftIcon />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginLeft: moderateScale(20)}}>
              <View style={{marginTop: moderateScale(3)}}>
                <LocationIcon size={15} color={Color.primary} />
              </View>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: '500',
                  marginLeft: moderateScale(5),
                }}>
                New York
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: moderateScale(15)}}>
              <ChatIcon size={20} color={Color.darkBlue} />
            </TouchableOpacity>
            {favourite ? (
              <TouchableOpacity onPress={toggleFavourite}>
                <FavouritesIcon color={Color.darkGrey} size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleFavourite}>
                <FavouriteFilledIcon color={Color.primary} size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text
          style={{
            fontSize: moderateScale(20),
            fontWeight: '600',
            marginLeft: moderateScale(12),
            color: Color.darkBlue,
            marginTop: moderateScale(10),
          }}>
          Warn Spaces
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(12),
            marginTop: moderateScale(10),
          }}>
          <AdressIcon size={16} color={'#fff'} />

          <Text style={{marginLeft: moderateScale(5)}}>
            Avinguda Diagonal, 444, ground floor, 08037 Barcelona
          </Text>
        </View>
        <View style={{marginTop: moderateScale(15)}}>
          <MapImage1 />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(15),
            marginTop: moderateScale(10),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: moderateScale(15),
              fontWeight: '500',
              color: Color.darkBlue,
            }}>
            Invite Connection Members
          </Text>
          <Text
            style={{
              fontSize: moderateScale(15),
              fontWeight: '500',
              color: Color.primary,
            }}>
            04
          </Text>
        </View>
        <FlatList
          horizontal
          data={userImages}
          renderItem={({item, index}) =>
            selectedImage.includes(index) ? (
              <View
                style={{
                  marginHorizontal: moderateScale(7),
                  marginTop: moderateScale(10),
                }}>
                <TouchableOpacity onPress={() => unSelect(index)}>
                  <Image
                    source={item.image}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      borderColor: Color.primary,
                      borderWidth: 1,
                    }}
                  />
                </TouchableOpacity>
                <View style={{position: 'absolute', top: 3, left: 50}}>
                  {item.icon}
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginHorizontal: moderateScale(7),
                  marginTop: moderateScale(10),
                }}>
                <TouchableOpacity onPress={() => selected(index)}>
                  <Image
                    source={item.image}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      borderColor: Color.primary,
                      borderWidth: 1,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )
          }
        />
        <View
          style={{
            marginVertical: moderateScale(20),
            backgroundColor: 'yellow',
          }}>
          <WorkspaceDetailsTabs />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: Color.primary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: moderateScale(15),
        }}>
        <View style={{marginLeft: moderateScale(15)}}>
          <Text
            style={{
              color: Color.white,
              fontWeight: '600',
              fontSize: moderateScale(15),
            }}>
            $ 45
          </Text>
          <View style={{flexDirection: 'row', marginTop: moderateScale(5)}}>
            <CalendarIcon size={15} color={Color.white} />
            <Text
              style={{
                color: Color.white,
                fontWeight: '600',
                marginLeft: moderateScale(5),
              }}>
              Tomorrow
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("BookingWorkspace")}
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: moderateScale(25),
            paddingVertical: moderateScale(10),
            marginRight: moderateScale(10),
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              color: Color.primary,
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkspaceDetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
