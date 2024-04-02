import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LogoJoie from '../components/Svgs/LogoJoie';
import Input from '../components/Input';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../assets/images';
import {useForm, Controller} from 'react-hook-form';

interface SignUpScreenProps {}

interface FormState {
  email: string;
  password: string;
}

const SignUpScreen = () => {
  const [message, setMessage] = useState('');
  const navigation: any = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({email, password}: FormState) => {
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('isUserCreated', isUserCreated);
      setMessage('');
      navigation.navigate('Login');
    } catch (err: any) {
      console.log('err', err);
      setMessage(err.message);
    }
  };

  const goToSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={Images.background}>
          <View
            style={styles.header}>
            <LogoJoie />
          </View>
          <View style={{marginBottom: 150}}>
            <Text
              style={styles.signUptxt}>
              Sign Up
            </Text>
            <Controller
              control={control}
              name="email"
              render={({field: {value, onChange}}) => (
                <Input placeholder="Email" value={value} onChange={onChange} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {value, onChange}}) => (
                <Input
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.submitBtn}>
              <Text
                style={styles.submitBtnTxt}>
                Submit
              </Text>
            </TouchableOpacity>
            <Text>{message}</Text>
            <TouchableOpacity onPress={goToSignIn}>
              <Text
                style={styles.bottomBtn}>
                Already have an account ?
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    marginVertical: 50,
  },
  signUptxt:{
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  submitBtn:{
    borderWidth: 1,
    backgroundColor: 'grey',
    height: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 10,
  },
  submitBtnTxt:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 6,
    color: 'white',
  },
  bottomBtn:{
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
