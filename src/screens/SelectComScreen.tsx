import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header';
import {Images} from '../assets/images';
import CommunityTagFilled from '../components/CommunityTagFilled';
import CommunityTagOutline from '../components/CommunityTagOutline';
import RightMarkIcon from '../components/Svgs/RightMarkIcon';

interface SelectComScreenProps {}

const SelectComScreen = () => {
    const [item, setItem] = useState([
    "LGBTQ", "BIPOC", "Ceatives", "Parents", "Females", "Mental Health", "Pets", "Limited Mobility" 
    ])
    const [itemNum, setItemNum] = useState([]);
    const [select, setSelect] = useState();
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <Header />
        <View style={styles.header1}>{/* parent of all content except header */}
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 30,
                fontWeight: '500',
                color: 'black',
              }}>
              Safe Space allows belonging within the community
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#B52337',
                fontSize: 18,
                marginVertical: 18,
                fontWeight: '500',
              }}>
              What are your communities ?
            </Text>
            </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginHorizontal: 25,
            }}>
            <CommunityTagFilled text="LGBTQ" />
            <CommunityTagOutline text="BIPOC" />
            <CommunityTagOutline text="Ceatives" />
            <CommunityTagOutline text="Parents" />
            <CommunityTagFilled text="Females" />
            <CommunityTagOutline text="Mental Health" />
            <CommunityTagOutline text="Pets" />
            <CommunityTagOutline text="Limited Mobility" />
          </View>
          <View style={styles.bottomView}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.dot1}></View>
              <View style={styles.dot2}></View>
            </View>
            <View style={{marginLeft: 70}}>
              <RightMarkIcon />
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
    marginTop: 10,
  },
  bottomView: {
    marginTop: 248,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 120,
  },
  dot1: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 50,
    marginRight: 5,
  },
  dot2: {
    width: 12,
    height: 12,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
});
