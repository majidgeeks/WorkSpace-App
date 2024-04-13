import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Images} from '../assets/images';
import Header from '../components/Header';
import RightMarkIcon from '../components/Svgs/RightMarkIcon';
import DragList, {DragListRenderItemInfo} from 'react-native-draglist';
import DragIcon from '../components/Svgs/dragIcon';
import { moderateScale } from 'react-native-size-matters';

const itemFlow = [
  {
    index: 0,
    text: 'Energy',
    textColor: '#BB5A00',
    bgColor: '#EDBB99',
  },
  {
    index: 1,
    text: 'Abundance',
    textColor: '#007902',
    bgColor: '#ABEBC6',
  },
  {
    index: 2,
    text: 'Freedom',
    textColor: '#002275',
    bgColor: '#85C1E9',
  },
  {
    index: 3,
    text: 'Harmony',
    textColor: '#6F008F',
    bgColor: '#EBDEF0',
  },
  {
    index: 4,
    text: 'Play',
    textColor: '#8E7400',
    bgColor: '#F9E79F',
  },
  {
    index: 5,
    text: 'Surprise',
    textColor: '#C9611C',
    bgColor: '#FAE5D3',
  },
  {
    index: 6,
    text: 'Magic',
    textColor: '#BC0071',
    bgColor: '#E79ECA',
  },
  {
    index: 7,
    text: 'Celebration',
    textColor: '#00789A',
    bgColor: '#D0F5FF',
  },
  {
    index: 8,
    text: 'Renewal',
    textColor: '#7A8D00',
    bgColor: '#E9F4A3',
  },
  {
    index: 9,
    text: 'Transcedence',
    textColor: '#CE0303',
    bgColor: '#FFD4D4',
  },
];

interface ItemFlow {
  index: number;
  text: string;
  textColor: string;
  bgColor: string;
}

// const flowItems = [
//   'Energy',
//   'Abundance',
//   'Freedom',
//   'Harmony',
//   'Play',
//   'Surprise',
//   'Magic',
//   'Celebration',
//   'Renewal',
//   'Transcedence',
// ];

const SelectFlowScreen = () => {
  const [selectedFlow, setSelectedFlow] = React.useState<ItemFlow[]>([
    ...itemFlow,
  ]);
  const navigation: any = useNavigation();

  function keyExtractor(obj: ItemFlow) {
    return `${obj.index}`;
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    console.log('from', fromIndex);
    console.log('to', toIndex);
    const copy = [...selectedFlow]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
    setSelectedFlow(copy);
    console.log('selected flow', selectedFlow);
  }

  const user = auth().currentUser;
  console.log('currentUser', user);

  const onSubmit = async () => {
    try {
      if (!user) {
        return;
      }
      const userData = {
        flow: [...selectedFlow],
        fullname: '',
        email: user.email, // get it from firebase auth
        avatar: '',
        contactNo: '',
        onboarding: true,

        communities: [],
        isParent: false,
        userId: user.uid, // firebase current user id
      };

      const docAdded = await firestore().collection('Users').add(userData);
      console.log('User added!');
      const dataId = docAdded.id;
      navigation.navigate('SelectCommunity', {dataId});
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          <Text style={styles.headerTxt1}>
            Flow means staying grounded as the sky and letting everything else
            melt away.
          </Text>
          <Text style={styles.midTxt}>How do you find your Flow?</Text>

          <View style={{height: '70%'}}>
            <DragList
              data={selectedFlow}
              keyExtractor={keyExtractor}
              onReordered={onReordered}
              renderItem={({
                item,
                index,
                onDragEnd,
                onDragStart,
              }: DragListRenderItemInfo<ItemFlow>) => (
                <TouchableOpacity
                  onLongPress={onDragStart}
                  onPressOut={onDragEnd}
                  style={{
                    backgroundColor: item.bgColor,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginHorizontal: moderateScale(20) + index * 10,
                    height: 40,
                    marginTop: moderateScale(10),
                  }}>
                  <View style={{position: 'absolute', left: 10}}>
                    <DragIcon />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: item.textColor,
                      fontWeight: 'bold',
                      fontSize: moderateScale(15),
                    }}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.bottomView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: moderateScale(20),
              }}>
              <View style={styles.dot1}></View>
              <View style={styles.dot2}></View>
            </View>
            <View style={{marginLeft: moderateScale(70)}}>
              <TouchableOpacity onPress={onSubmit}>
                <RightMarkIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectFlowScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: moderateScale(30),
  },
  headerTxt1: {
    marginTop: moderateScale(10),
    color: 'black',
    fontWeight: '500',
    fontSize: moderateScale(15),
    textAlign: 'center',
    marginHorizontal: moderateScale(10),
  },
  midTxt: {
    textAlign: 'center',
    marginTop: moderateScale(20),
    color: 'red',
    fontWeight: '400',
    fontSize: moderateScale(20),
  },
  
  txt1: {},
  bottomView: {
    marginLeft: moderateScale(120),
    flexDirection: 'row',
    justifyContent: 'center',
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
