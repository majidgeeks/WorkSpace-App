import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LogoJoie from '../components/Svgs/LogoJoie';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Images} from '../assets/images';
import {useForm, Controller} from 'react-hook-form';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {moderateScale} from 'react-native-size-matters';
import CustomInput from '../components/Input';

GoogleSignin.configure({
  webClientId:
    '184803085881-q4ru0s41dr4q2ejc3h7281qh2iuqun95.apps.googleusercontent.com',
});

interface LoginScreenProps {}
interface FormState {
  email: string;
  password: string;
}

const LoginScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigation: any = useNavigation();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async ({email, password}: FormState) => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      console.log('isUserLogin', isUserLogin);
      if (isUserLogin) {
        navigation.navigate('SelectFlow');
      } else {
        return;
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  const onHandleSignUp = () => {
    navigation.navigate('SignUp');
  };

  //sign in with google button
  const onGoogleBtnPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('googleCredential', googleCredential);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      navigation.navigate('SelectFlow');
    } catch (err: any) {
      console.log('err', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={Images.background}>
          <View style={styles.header}>
            <LogoJoie />
          </View>
          <View style={{marginTop: moderateScale(20)}}>
            <Text style={styles.text1}>Already a member ?</Text>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}}) => (
                <CustomInput
                  placeholder="Email"
                  value={value}
                  onChange={onChange}
                  inputContainerStyle={{borderBottomWidth: 0}}
                />
              )}
            />
            {errors.email && <Text>email is required</Text>}
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}}) => (
                <CustomInput
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                  inputContainerStyle={{borderBottomWidth: 0}}
                />
              )}
            />
            {errors.password && <Text>password is required</Text>}
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleSubmit(handleLogin)}>
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={onGoogleBtnPress}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 8,
                }}>
                <Image
                  style={{width: 25, marginHorizontal: moderateScale(10)}}
                  source={Images.googleIcon}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: moderateScale(17),
                    color: 'red',
                  }}>
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{marginVertical: moderateScale(110), alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: '500'}}>
              Don't have an account
            </Text>
            <TouchableOpacity onPress={onHandleSignUp} style={styles.signUpBtn}>
              <Text style={styles.signUpBtnTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(50),
  },
  text1: {color: 'white', textAlign: 'center', fontWeight: 'bold'},
  loginBtn: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: moderateScale(45),
    borderRadius: 30,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  loginBtnTxt: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    marginTop: moderateScale(6),
    color: 'red',
  },
  googleBtn: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: moderateScale(45),
    borderRadius: 30,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  signUpBtn: {
    borderWidth: 1,
    borderColor: 'white',
    height: moderateScale(45),
    width: '95%',
    borderRadius: 10,
    marginTop: moderateScale(10),
  },
  signUpBtnTxt: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    marginTop: moderateScale(6),
    color: 'white',
  },
});
