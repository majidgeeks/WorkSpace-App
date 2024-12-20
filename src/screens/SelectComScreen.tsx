import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
import {Images} from '../assets/images';
import CommunityTagFilled from '../components/CommunityTagFilled';
import CommunityTagOutline from '../components/CommunityTagOutline';
import RightMarkIcon from '../components/Svgs/RightMarkIcon';
import {TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COMMUNITIES} from '../constants/Onboarding';
import BottomTabNavigation from '../Navigator/BottomTabNavigation';

interface SelectComScreenProps {}

const SelectComScreen = () => {
  const [items, setItems] = useState(COMMUNITIES);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [error, setError] = useState('');
  const route = useRoute<RouteProp<any>>();
  const navigation: any = useNavigation();
  const id = route.params?.dataId;

  const onSubmit = async () => {
    try {
      if (selectedItems.length) {
        const docUpdated = await firestore()
          .collection('Users')
          .doc(id)
          .update({communities: selectedItems});
        console.log('User updated!');
        console.log('docUpdated', docUpdated);
        // navigation.navigate('Profile', {id});
        // <BottomTabNavigation />
      } else {
        setError('you must select atleast one tag');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const handleSelect = (index: number) => {
    console.log('index', index);
    const updatedArray = [...selectedItems];
    updatedArray.push(index);
    console.log('again update', updatedArray);
    setSelectedItems(updatedArray);
    console.log('selectedItems', selectedItems);
  };

  const handleUnSelect = (index: number) => {
    const updatedArray = [...selectedItems];
    updatedArray.splice(index, 1);
    setSelectedItems(updatedArray);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <Header />
        <View style={styles.header1}>
          {/* parent of all content except header */}
          <View>
            <Text style={styles.text1}>
              Safe Space allows belonging within the community
            </Text>
            <Text style={styles.text2}>What are your communities ?</Text>
          </View>
          <View style={{height: '74%', justifyContent: 'space-between'}}>
            <View style={styles.tagView}>
              {items.map((data, index) => {
                return selectedItems.includes(index) ? (
                  <CommunityTagFilled
                    key={data}
                    text={data}
                    onPress={() => handleUnSelect(index)}
                  />
                ) : (
                  <CommunityTagOutline
                    key={data}
                    text={data}
                    onPress={() => handleSelect(index)}
                  />
                );
              })}
            </View>
            <View>
              {error ? <Text style={styles.errorTxt}>{error}</Text> : null}
              <View style={styles.bottomView}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View style={styles.dot1} />
                  <View style={styles.dot2} />
                </View>
                <View style={{marginLeft: moderateScale(70)}}>
                  <TouchableOpacity onPress={onSubmit}>
                    <RightMarkIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectComScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: moderateScale(10),
  },
  text1: {
    textAlign: 'center',
    marginTop: moderateScale(30),
    fontWeight: '500',
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    color: '#B52337',
    fontSize: moderateScale(18),
    marginVertical: moderateScale(18),
    fontWeight: '500',
  },
  tagView: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: moderateScale(25),
  },
  errorTxt: {
    marginHorizontal: moderateScale(60),
    fontSize: moderateScale(16),
    color: 'red',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: moderateScale(120),
  },
  dot1: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 50,
    marginRight: moderateScale(5),
  },
  dot2: {
    width: 12,
    height: 12,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
});
