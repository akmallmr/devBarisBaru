import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMassage: {
        height: 72,
        justifyContent:'center',
        alignSelf: 'center'
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: 'bold',
    },
    id: {
        marginTop: 145,
        height: 40,
        width: 275,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5
    },
    pass: {
        height: 40,
        width: 275,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        marginBottom: 15
    },
    signinButton: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 15,
        width: 125,
        height: 35,
        borderRadius: 15
    },
    buttonContainer:{
        flexDirection:'row',
        alignContent: 'space-between'
    },
    signinText:{
        color: '#FFF',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    signupButton: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15,
        width: 125,
        height: 35,
        borderRadius: 15
    },
    signupText: {
        color: '#FFF',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    dummycontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dummybutton: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dummytext: {
        color: '#596275',
        fontSize: 12,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        marginTop: 15
    },
})