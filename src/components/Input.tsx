import * as React from 'react';
import {View, StyleSheet, TextInput, TextStyle} from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  style?: TextStyle;
}

const Input: React.FC<InputProps> = ({placeholder, value, onChange, style}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.txtInput, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {},
  txtInput: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft:15,
    
  },
});
