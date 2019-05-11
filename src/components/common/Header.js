//Import library
import React from 'react';
import { Text, View, StatusBar } from 'react-native';


//Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <StatusBar barStyle="light-content" />
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 90,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20,
    color: '#FFFFFF'
  }
};

//Make component available  to other parts of the app
export { Header };
