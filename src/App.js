import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header, Button, Card, CardSection, Spinner } from './components/common'; 
import LoginForm from './components/LoginForm'; 


class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuz11WLy5-hsk6l6k5oilhWe5X1DZq8YQ',
      authDomain: 'outwardhack.firebaseapp.com',
      databaseURL: 'https://outwardhack.firebaseio.com',
      projectId: 'outwardhack',
      storageBucket: 'outwardhack.appspot.com',
      messagingSenderId: '476104090856',
      appId: '1:476104090856:web:b2739556868d170c'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false }); 
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
          </CardSection>
        </Card>
      ); 
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: 'center'
  }
};

export default App; 
