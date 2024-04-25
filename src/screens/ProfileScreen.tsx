import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  launchImageLibrary as _launchImageLibrary,
  launchCamera as _launchCamera,
} from 'react-native-image-picker';
import {useForm, Controller} from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import EditPicIcon from '../components/Svgs/EditPicIcon';
import CustomInput from '../components/Input';
import {moderateScale} from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import {Switch} from '@rneui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const countryCodes = [
  {label: '+92', value: '+92'},
  {label: '+1', value: '+1'},
];

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

interface ProfileScreenProps {}

const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(); // for image picker
  const route = useRoute<RouteProp<any>>();
  const dataId = route.params?.id;
  console.log('dataId', dataId);

  const user = auth().currentUser;
  const userId = user?.uid;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: user?.email ?? '',
      code: '+92',
      contact: '',
      parent: false,
      caregiver: false,
    },
  });
  console.log('errors', errors);

  //functions for image picker starts here
  const handleCameraLaunch = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      handleResponse,
    );
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      const imageUri = response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };
  // image picker ends here

  //   console.log('selectimage', selectedImage);

  const onSubmit = async (data: any) => {
    console.log('onSubmit');
    try {
      const concatNum = data.code.value.concat(data.contact);
      const payload = {
        fullname: data.fullName,
        email: data.email,
        avatar: selectedImage,
        contactNo: concatNum,
        isParent: data.parent,
        isCareTaker: data.caregiver,
        userId: userId, // firebase current user id
      };
      const docUpdated = await firestore()
        .collection('Users')
        .doc(dataId)
        .update({...payload});
      console.log('docUpdated', docUpdated);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: moderateScale(40)}}>
          <Image source={{uri: selectedImage}} style={styles.image} />
          <TouchableOpacity
            style={{position: 'absolute', top: 110}}
            onPress={handleCameraLaunch}>
            <EditPicIcon />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: moderateScale(25)}}>
          <View style={{borderTopWidth: 2, borderTopColor: '#EDEDED'}}>
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <>
                  <CustomInput
                    label="Full Name"
                    value={value}
                    onChange={onChange}
                    labelStyle={{
                      fontWeight: '300',
                      color: '#18255F',
                      marginLeft: moderateScale(10),
                      marginTop: moderateScale(5),
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      marginBottom: moderateScale(-12),
                    }}
                    style={{backgroundColor: '#EDEDED'}}
                  />
                  {error?.message ? <Text>{error.message}</Text> : null}
                </>
              )}
            />
          </View>
          <View style={{borderTopWidth: 2, borderTopColor: '#EDEDED'}}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <>
                  <CustomInput
                    disabled={true}
                    label="Working email address"
                    value={value}
                    onChange={onChange}
                    labelStyle={{
                      fontWeight: '300',
                      color: '#18255F',
                      marginLeft: moderateScale(10),
                      marginTop: moderateScale(5),
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      marginBottom: moderateScale(-22),
                    }}
                    style={{backgroundColor: '#EDEDED'}}
                  />
                  {error?.message ? <Text>{error.message}</Text> : null}
                </>
              )}
            />
          </View>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: '#EDEDED',
              flexDirection: 'row',
              paddingHorizontal: moderateScale(20),
              marginTop: moderateScale(10),
            }}>
            <Controller
              name="code"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    containerStyle={{
                      backgroundColor: 'red',
                      marginTop: moderateScale(-30),
                    }}
                    data={countryCodes}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={onChange}
                  />
                  {error?.message ? <Text>{error.message}</Text> : null}
                </>
              )}
            />
            <Controller
              control={control}
              name="contact"
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <>
                  <CustomInput
                    value={value}
                    onChange={onChange}
                    placeholder="3456789096"
                    style={{
                      backgroundColor: '#EDEDED',
                      marginHorizontal: moderateScale(0),
                    }}
                    label="Contact"
                    labelStyle={styles.contactInputLableStyle}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      width: '75%',
                      marginTop: moderateScale(27),
                    }}
                  />
                  {!error?.message ? <Text>{error?.message}</Text> : null}
                </>
              )}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: '#EDEDED',
              marginTop: moderateScale(-10),
            }}>
            <Text style={styles.parentTxt}>Are you a parent ?</Text>
            <Controller
              name="parent"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <>
                  <Switch
                    style={{
                      marginTop: moderateScale(-20),
                      marginRight: moderateScale(10),
                    }}
                    value={value}
                    onValueChange={onChange}
                    thumbColor={'white'}
                    trackColor={{true: '#18255F', false: 'red'}}
                  />
                  {error?.message ? <Text>{error.message}</Text> : null}
                </>
              )}
            />
          </View>
          <View style={styles.elserTxtView}>
            <Text style={styles.elderTxt}>Are you an elderly caregiver ?</Text>
            <Controller
              name="caregiver"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <>
                  <Switch
                    style={{
                      position: 'absolute',
                      bottom: moderateScale(10),
                      right: moderateScale(14),
                    }}
                    value={value}
                    onValueChange={onChange}
                    trackColor={{true: '#18255F', false: 'red'}}
                    thumbColor={'white'}
                  />
                  {error?.message ? <Text>{error.message}</Text> : null}
                </>
              )}
            />
          </View>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.saveBtnTxt}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: 125,
    height: 125,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'red',
  },
  dropdown: {
    marginTop: moderateScale(32),
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    width: 90,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  contactInputLableStyle: {
    fontWeight: '300',
    color: '#18255F',
    position: 'absolute',
    bottom: moderateScale(85),
    right: moderateScale(346),
    top: moderateScale(5),
  },
  parentTxt: {
    fontSize: moderateScale(16),
    color: '#18255F',
    marginTop: moderateScale(10),
    marginLeft: moderateScale(20),
  },
  elserTxtView: {
    marginTop: moderateScale(15),
    borderTopWidth: 2,
    borderTopColor: '#EDEDED',
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
  },
  elderTxt: {
    fontSize: moderateScale(16),
    color: '#18255F',
    marginVertical: moderateScale(12),
    marginLeft: moderateScale(20),
  },
  saveBtn: {
    borderWidth: 1,
    borderColor: 'white',
    height: moderateScale(45),
    marginHorizontal: moderateScale(15),
    borderRadius: 10,
    marginTop: moderateScale(20),
    backgroundColor: '#18255F',
  },
  saveBtnTxt: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: moderateScale(17),
    marginTop: moderateScale(7),
    color: 'white',
  },
});
