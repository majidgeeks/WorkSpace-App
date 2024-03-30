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
import LogoJoie from '../SvgComponents/LogoJoie';
import Input from '../components/Svgs/Input';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';



interface LoginScreenProps {}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  

  const handleEmail = (txt: string) => {
    setEmail(txt);
  };

  const handlePassword = (txt: string) => {
    setPassword(txt);
  };

  const handleLogin = async() => {
   try{
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password
      )

      console.log('isUserLogin',isUserLogin);

   }
   catch(error){
     console.log("err", error)
   }
  }

  const onHandleSignUp = () => {
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={{}}
          source={require('../images/backgroundColor.png')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <LogoJoie />
          </View>

          <View style={{marginTop: 20}}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Already a member ?
            </Text>
            <Input value={email} placeholder="email" onChange={handleEmail} />
            <Input
              value={password}
              placeholder="password"
              onChange={handlePassword}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                backgroundColor: 'grey',
                height: 45,
                borderRadius: 30,
                marginHorizontal: 10,
                marginTop: 10,
              }} onPress={handleLogin}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 6,
                  color: 'white',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                backgroundColor: 'white',
                height: 45,
                borderRadius: 30,
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 8,
                }}>
                <Image
                  style={{width: 25, marginHorizontal: 10}}
                  source={require('../images/googleIcon.png')}
                />
                <Text style={{textAlign: 'center', fontSize: 17, color: 'red'}}>
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: 110, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Don't have an account</Text>
            <TouchableOpacity
              onPress={onHandleSignUp}
              style={{
                borderWidth: 1,
                borderColor: 'white',
                height: 45,
                width: 345,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 6,
                  color: 'white',
                }}>
                Sign Up
              </Text>
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
});
