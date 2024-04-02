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
import Input from '../components/Input';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Images} from '../assets/images';
import {useForm, Controller} from 'react-hook-form';

interface LoginScreenProps {}
interface FormState {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      navigation.navigate('SelectFlow');
    } catch (error) {
      console.log('err', error);
    }
  };

  const onHandleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={Images.background}>
          <View style={styles.header}>
            <LogoJoie />
          </View>

          <View style={{marginTop: 20}}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Already a member ?
            </Text>

            <Controller
              name="email"
              control={control}
              render={({field: {value, onChange}}) => (
                <Input placeholder="Email" value={value} onChange={onChange} />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({field: {value, onChange}}) => (
                <Input
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleSubmit(handleLogin)}>
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleBtn}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 8,
                }}>
                <Image
                  style={{width: 25, marginHorizontal: 10}}
                  source={Images.googleIcon}
                />
                <Text style={{textAlign: 'center', fontSize: 17, color: 'red'}}>
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: 110, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Don't have an account</Text>
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
    marginTop: 50,
  },
  loginBtn: {
    borderWidth: 1,
    backgroundColor: 'grey',
    height: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 10,
  },
  loginBtnTxt: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 6,
    color: 'white',
  },
  googleBtn: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 10,
  },
  signUpBtn: {
    borderWidth: 1,
    borderColor: 'white',
    height: 45,
    width: 345,
    borderRadius: 10,
    marginTop: 10,
  },
  signUpBtnTxt: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 6,
    color: 'white',
  },
});
