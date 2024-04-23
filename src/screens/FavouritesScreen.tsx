import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../assets/images';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../constants/Color';
import FavouriteFilledIcon from '../components/Svgs/FavouriteFilledIcon';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';

interface FavouritesScreenProps {}

const cardsData = [
  {
    id: 0,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 1,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 2,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 3,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 4,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 5,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 6,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
  {
    id: 7,
    image: Images.moonImage,
    title: 'Warn Spaces',
    favourity: <FavouriteFilledIcon size={25} color={Color.primary} />,
    unFavour: <FavouritesIcon size={25} color={Color.white} />,
    gender: 'Female only ,',
    community: 'LGBTQ +2',
    usersImage: Images.moonImage,
    cb: 'CB 10+',
  },
];

const FavouritesScreen = (props: FavouritesScreenProps) => {
  const [selectedIcon, setSelectedIcon] = useState<number[]>([]);

  const changeIconToFilled = (index: number): void => {
    console.log('index number', index);
    const updatedArray = [...selectedIcon];
    updatedArray.push(index);
    setSelectedIcon(updatedArray);
    console.log(selectedIcon);
  };

  const changeIconToOutline = (index: number): void => {
    const updatedArray = [...selectedIcon];
    updatedArray.splice(index, 1);
    setSelectedIcon(updatedArray);
  };

  return (
    <View style={styles.container}>
      <View style={{height: '8%', marginTop: moderateScale(10)}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: moderateScale(20),
            fontWeight: '500',
          }}>
          Favourite Workspace
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{}}
        data={cardsData}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: moderateScale(10),
              borderBottomWidth: 1,
              borderBottomColor: Color.mapColor,
              paddingBottom: moderateScale(10),
            }}>
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 100,
                borderRadius: 10,
                marginRight: moderateScale(5),
              }}
            />
            <View
              style={{
                width: '46%',
                marginLeft: moderateScale(5),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(15),
                  fontWeight: 'bold',
                  color: Color.primary,
                }}>
                {item.title}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{item.gender} </Text>
                <Text>{item.community} </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: moderateScale(25),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{width: 20, height: 20, borderRadius: 50}}
                    source={item.usersImage}
                  />
                  <Image
                    style={{width: 20, height: 20, borderRadius: 50}}
                    source={item.usersImage}
                  />
                  <Text style={{marginLeft: moderateScale(5)}}>{item.cb}</Text>
                </View>
                <View style={{marginLeft: moderateScale(10)}}>
                  {selectedIcon.includes(index) ? (
                    <TouchableOpacity onPress={() => changeIconToFilled(index)}>
                      {item.favourity}
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => changeIconToOutline(index)}>
                      {item.unFavour}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={index => `${index.id}`}
      />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
