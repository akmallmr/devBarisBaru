// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'

// class TestApp extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.text1}> TestApp Hafalan, etc. </Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     text1: {
//         fontSize: 25,
//         alignSelf: 'center'
//     }
// })

// export default TestApp

import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Note from './Note.js'
import styles from './styles'


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [], //catatan note todolist, Array
            noteText: ''
        }
    }

    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>my To Do Apps</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        onChangeText={(noteText) => this.setState({ noteText })}
                        style={styles.textInput}
                        placeholder="Fill your report here.."
                        placeholderTextColor="#d1ccc0"
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}> + </Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote() {
        if (this.state.noteArray) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() +
                    '/' + (d.getMonth() + 1) +
                    '/' + d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' })
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }
}
