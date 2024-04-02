import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Images} from '../assets/images';
import Header from '../components/Header';

const SelectFlowScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background}>
        <Header />
        <View style={styles.header1}>
          <Text style={styles.headerTxt1}>
            Flow means staying grounded as the sky{' '}
          </Text>
          <Text style={styles.headerTxt2}>
            and letting everything else melt away.
          </Text>
          <Text style={styles.midTxt}>How do you find your Flow?</Text>
          <View>
            <Text style={styles.txt1}>Energy</Text>
            <Text style={styles.txt2}>Abundance</Text>
            <Text style={styles.txt3}>Freedom</Text>
            <Text style={styles.txt4}>Harmony</Text>
            <Text style={styles.txt5}>Play</Text>
            <Text style={styles.txt6}>Surprise</Text>
            <Text style={styles.txt7}>Magic</Text>
            <Text style={styles.txt8}>Celebration</Text>
            <Text style={styles.txt9}>Renewal</Text>
            <Text style={styles.txt10}>Transcedence</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.dot1}></View>
            <View style={styles.dot2}></View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectFlowScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  headerTxt1: {
    marginTop: 15,
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: -10,
  },
  headerTxt2: {
    marginTop: 15,
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  midTxt: {
    textAlign: 'center',
    marginTop: 30,
    color: 'red',
    fontWeight: '400',
    fontSize: 20,
  },
  txt1: {
    textAlign: 'center',
    backgroundColor: '#EDBB99',
    color: '#BB5A00',
    fontWeight:"bold",
    width: '90%',
    marginHorizontal: 17,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 10,
  },
  txt2: {
    textAlign: 'center',
    backgroundColor: '#ABEBC6',
    color:"#007902",
    fontWeight:"bold",
    width: '85%',
    marginHorizontal: 27,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt3: {
    textAlign: 'center',
    backgroundColor: '#85C1E9',
    color:"#002275",
    fontWeight:"bold",
    width: '80%',
    marginHorizontal: 37,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt4: {
    textAlign: 'center',
    backgroundColor: '#EBDEF0',
    color:"#6F008F",
    fontWeight:"bold",
    width: '75%',
    marginHorizontal: 47,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt5: {
    textAlign: 'center',
    backgroundColor: '#F9E79F',
    color:"#8E7400",
    fontWeight:"bold",
    width: '70%',
    marginHorizontal: 57,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt6: {
    textAlign: 'center',
    backgroundColor: '#FAE5D3',
    color:"#C9611C",
    fontWeight:"bold",
    width: '65%',
    marginHorizontal: 67,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt7: {
    textAlign: 'center',
    backgroundColor: '#E79ECA',
    color:"#BC0071",
    fontWeight:"bold",
    width: '60%',
    marginHorizontal: 77,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt8: {
    textAlign: 'center',
    backgroundColor: '#D0F5FF',
    color:"#00789A",
    fontWeight:"bold",
    width: '55%',
    marginHorizontal: 87,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt9: {
    textAlign: 'center',
    backgroundColor: '#E9F4A3',
    color:"#7A8D00",
    fontWeight:"bold",
    width: '50%',
    marginHorizontal: 97,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  txt10: {
    textAlign: 'center',
    backgroundColor: '#FFD4D4',
    color:"#CE0303",
    fontWeight:"bold",
    width: '45%',
    marginHorizontal: 107,
    fontSize: 15,
    borderRadius: 10,
    height: 40,
    paddingTop: 6,
    marginTop: 6,
  },
  bottomView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
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
