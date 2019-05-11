import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { CardSection, Card, Input, Button } from './common';

class LoginForm extends Component { 
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  render() {
    return (
      <Card style={{ marginTop: 50 }}>
        <CardSection>
          <Input
            label='Email'
            placeholder='norah@gmail.com' 
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input 
            label='Password'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  };
}

export default LoginForm;
