import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface InputProps {
    placeholder : string
    value : string
    onChange : (text: string) => void
    
}

const Input: React.FC<InputProps> = ({placeholder, value, onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={{borderWidth:1, backgroundColor:"white", marginHorizontal:10, borderRadius:30, marginVertical:5}}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {}
});
