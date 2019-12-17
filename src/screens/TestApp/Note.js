import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    note: {
        position: 'relative',
        padding: 0.2,
        marginTop: 3,
        // paddingRight: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#393e46'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        backgroundColor: 'white',
        borderLeftColor: '#5f27cd',

    },
    noteDelete: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#feca57',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 10,
    },
    noteDeleteText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default Note