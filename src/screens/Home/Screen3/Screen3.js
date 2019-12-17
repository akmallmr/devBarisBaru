import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Screen3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtcontainer}> Screen 3 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#273c75'
    },
    txtcontainer: {
        alignSelf: 'center',
        fontSize: 20
    }
})
