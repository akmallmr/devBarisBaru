import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Signin extends Component {
    render() {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.id}
              placeholder="Email"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.pass}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
            />
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signinButton}
                onPress={() => this.props.navigation.navigate()}>
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
                <Text style={styles.dummytext}>Click here to use dummy account.</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}