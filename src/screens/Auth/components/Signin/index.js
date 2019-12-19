import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

import styles from './styles'

export default class Signin extends React.Component {
      state = {
        email: "",
        password: "",
        errorMessage: null
      };

      handleLogin = () => {
        const {email, password} = this.state;

        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(error => this.setState({errorMessage: error.message}));
      };

    render() {  
        return (
          <View style={styles.container}>

            <View style={styles.errorMassage}>
              {this.state.errorMassage && 
                <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <TextInput
              style={styles.id}
              placeholder="Email"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />

            <TextInput
              style={styles.pass}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signinButton}
                onPress={() => this.handleLogin(this.state.email, this.state.password, this.state.navigation.navigate)}>
                <Text style={styles.signinText}> Sign in </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => this.props.navigation.navigate()}>
                <Text style={styles.signupText}> Register </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dummycontainer}>
              <TouchableOpacity
                style={styles.dummybutton}
                onPress={() => this.props.navigation.navigate('Main')}>
                <Text style={styles.dummytext}>
                  Click here to use dummy account.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}