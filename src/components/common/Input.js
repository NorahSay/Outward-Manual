import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ onChangeText, value, placeholder, label }) => {
  const { container, labelStyle, inputStyle } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
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
    paddingRight: 10,
    paddingLeft: 10,
    fonySize: 18
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10
  },
  container: {
    height: 60,
    flex: 1
  }
};

export { Input };
