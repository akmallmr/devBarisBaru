import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import styles from '../Welcome/styles'


export default class Welcome extends Component{
    render(){
        return (
          <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.main}>
              <Image
                source={require('./../../assets/rn-baris-baru-plain.png')}
                style={styles.img}
              />
            </View>
            <View style={styles.button}>
              <Text style={styles.textenter}>ENTER</Text>
            </View>
            {/* <View style={styles.button}>
              <Text style={styles.text}>ENTER</Text>
            </View> */}
            <View style={styles.footer}>
              <Text style={styles.textfooter1}>Terms and Conditions. </Text>
              <Text style={styles.textfooter2}>
                ©2019 ● BARIS BARU DEV. PROJECT V0.1
              </Text>
            </View>
          </View>
        );
    }
}
