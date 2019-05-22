import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ onChangeText, value, placeholder, label, secureTextEntry }) => {
  const { container, labelStyle, inputStyle } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  ); 
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
