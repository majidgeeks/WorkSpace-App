import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Color } from '../constants/Color';
import DownArrowIcon from './Svgs/DownArrowIcon';
import UpcomingIcon from './Svgs/UpcomingIcon';

const BookingsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:"row", width:"100%", backgroundColor:"yellow", justifyContent:"space-between"}}>
            <View>
            <Text style={styles.modalText}>Upcoming</Text>
            <Text style={{color:Color.primary}}>Next bookings from today</Text>
            </View>
               <View style={{marginTop:moderateScale(5)}}>
              <UpcomingIcon color={Color.primary} size={29} />
               </View>
            </View>
            <View></View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Upcoming</Text>
        <View style={{marginTop:moderateScale(12), marginLeft:moderateScale(15)}}>
        <DownArrowIcon size={10} color={Color.darkGrey} />
        </View>
      </Pressable>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',

    // marginTop: 22,
  },
  modalView: {
    marginTop: 155,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    
    width:"100%",
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    // width:170,
    elevation: 2,
    borderBottomColor:Color.primary,
    borderBottomWidth:1,
    borderStyle:"dashed",
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Color.primary,
    fontWeight: "400",
    textAlign: 'center',
    fontSize:moderateScale(20)
  },
  modalText: {
    fontSize:moderateScale(17),
    fontWeight:"bold",
    color:Color.primary
    // marginBottom: 15,
    // textAlign: 'center',

  },
});

export default BookingsModal;