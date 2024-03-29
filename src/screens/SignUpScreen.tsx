import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LogoJoie from '../SvgComponents/LogoJoie';
import Input from '../components/Svgs/Input';

interface SignUpScreenProps {}

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (txt: string) => {
     setEmail(txt)
     console.log(email)
    }

    const handlePassword = (txt: string) => {
        setPassword(txt)
        console.log(password)
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={require('../images/backgroundColor.png')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 120,
              marginVertical:50
            }}>
            <LogoJoie />
          </View>

          <View style={{marginBottom:150 }}>
            <Text style={{color:"white", textAlign:"center", marginVertical:20, fontSize:20, fontWeight:"bold"}}>Sign Up</Text>
            <Input placeholder='Email' value={email}  onChange={handleEmail}/>
            <Input placeholder='Password' value={password} onChange={handlePassword}/>
            <TouchableOpacity style={{borderWidth:1, backgroundColor:"grey", height:45, borderRadius:30, marginHorizontal:10, marginTop:10}}>
                <Text style={{textAlign:"center", fontSize:20, marginTop:6, color:"white"}}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:"white", textAlign:"center", marginTop:10, fontSize:15, }}>Already have an account ?</Text>
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
});
