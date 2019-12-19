import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import Icon2 from 'react-native-vector-icons/Ionicons'
import * as firebase from 'firebase'

import styles from './styles'

class Home extends Component {

      state = { 
        email: "",
        displayName: "",
      };

      componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;
        
        this.setState({email, displayName});
      };

      signOutUser = () => {
        firebase
            .auth()
            .signOut();
      };



    render() {
        return (
          <View style={styles.container}>
            <StatusBar 
              backgroundColor="white" 
              barStyle="dark-content" />

            <Text> Hi, {this.state.email}!</Text>

            <View style={styles.container2}>
              <TouchableOpacity 
                  style={styles.signoutButton}
                  onPress = {this.signOutUser}>
                    <Text> Logout </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.maincontainer}>
              <TouchableOpacity style={styles.videotile}>
                <Text style={styles.textvidtile}> Get API from Youtube to Here </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomWidth} />

            <View style={styles.rowcontainer1}>
              <TouchableOpacity 
                style={styles.button1}
                onPress={()=> this.props.navigation.navigate ('Screen1')}>
                  <Text style={styles.textbutton1}>Button 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => this.props.navigation.navigate('Screen2')}>
                  <Text style={styles.textbutton2}>Button 2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowcontainer2}>
              <TouchableOpacity 
                style={styles.button3}
                onPress={() => this.props.navigation.navigate('Screen3')}>
                  <Text style={styles.textbutton3}>Button 3</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.button4}
                onPress={() => this.props.navigation.navigate('Screen4')}>
                  <Text style={styles.textbutton4}>Button 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}


export default Home