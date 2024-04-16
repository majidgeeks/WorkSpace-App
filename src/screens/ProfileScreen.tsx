import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  launchImageLibrary as _launchImageLibrary,
  launchCamera as _launchCamera,
} from 'react-native-image-picker';
import EditPicIcon from '../components/Svgs/EditPicIcon';
import CustomInput from '../components/Input';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

interface ProfileScreenProps {}

const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
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

  console.log('selectimage', selectedImage);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: selectedImage}}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={handleCameraLaunch}>
          <EditPicIcon />
        </TouchableOpacity>
      </View>

      <View>
        <CustomInput  label='Full Name' />
        <CustomInput label="Email" />
        <CustomInput placeholder="+923456789096" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
