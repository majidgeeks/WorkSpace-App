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
import { moderateScale } from 'react-native-size-matters';

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
      console.log("email", email)
      console.log('isUserCreated', isUserCreated);
      setMessage('');
       if(isUserCreated){
       navigation.navigate('SelectFlow');}
       else{
        return;
       }
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
          <View style={{marginBottom: moderateScale(150)}}>
            <Text
              style={styles.signUptxt}>
              Sign Up
            </Text>
            <Controller
              control={control}
              name="email"
              rules={{
               required:true
              }}
              render={({field: {value, onChange}}) => (
                <Input placeholder="Email" value={value} onChange={onChange} />
              )}
            />
            {errors.email && <Text>email is required</Text>}
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
            {errors.password && <Text>Password is required</Text>}
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
    marginTop: moderateScale(120),
    marginVertical: moderateScale(50),
  },
  signUptxt:{
    color: 'white',
    textAlign: 'center',
    marginVertical: moderateScale(20),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  submitBtn:{
    borderWidth: 1,
    backgroundColor: 'white',
    height: moderateScale(45),
    borderRadius: 30,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  submitBtnTxt:{
    textAlign: 'center',
    fontSize: moderateScale(20),
    marginTop: moderateScale(6),
    color: 'red',
  },
  bottomBtn:{
    color: 'white',
    textAlign: 'center',
    marginTop: moderateScale(10),
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
});
