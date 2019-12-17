import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Screen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtcontainer}> Screen 1 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40739e'
    },
    txtcontainer: {
        alignSelf: 'center',
        fontSize: 20
    }
})
