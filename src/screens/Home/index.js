import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import styles from '../Home/styles'

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> HomeScreen. </Text>
            </View>

        )
    }
}

export default Home;