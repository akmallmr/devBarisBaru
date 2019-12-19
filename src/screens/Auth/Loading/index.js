import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'

class Loading extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate (user ? 'App' : 'Auth');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}> Loading Screen... </Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 20,
        alignSelf: 'center'

    }
})
export default Loading