import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native'

import Signin from './components/Signin'
import styles from './styles'


class Auth extends Component{
    render(){
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.header}></View>
            <View style={styles.main}>
              <Image
                source={require('./../../assets/rn-baris-baru-plain.png')}
                style={styles.img}
              />
            </View>

{/* Navigasi gak bisa bekerja ketika import login page <Signin/> */}


            <View style={styles.container2}>
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
                  <Text style={styles.dummytext}>
                    Click here to use dummy account.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.textfooter1}>Terms and Conditions. </Text>
              <Text style={styles.textfooter2}>
                ©2019 ● BARIS BARU DEV. PROJECT v0.1
              </Text>
            </View>
          </View>
        );
    }
}

export default Auth;