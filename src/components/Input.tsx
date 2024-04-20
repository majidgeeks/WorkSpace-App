import * as React from 'react';
import {View, StyleSheet, TextStyle} from 'react-native';
import {Input} from '@rneui/themed';

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  style?: TextStyle;
  label?: string;
  labelStyle?: TextStyle;
  inputContainerStyle?: TextStyle;
  disabled? : boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  style,
  label,
  labelStyle,
  inputContainerStyle,
  disabled
}) => {
  return (
    <Input
      style={[styles.txtInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      label={label}
      labelStyle={labelStyle}
      inputContainerStyle={inputContainerStyle}
      disabled={disabled}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {},
  txtInput: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 15,
  },
});
