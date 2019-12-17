import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Screen4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtcontainer}> Screen 4 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcdde1'
    },
    txtcontainer: {
        alignSelf: 'center',
        fontSize: 20
    }
})
