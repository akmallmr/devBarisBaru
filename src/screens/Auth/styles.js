import React, {Component} from 'react'
import {
    StyleSheet
} from 'react-native'

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: width,
    height: height,
    alignSelf: 'center',
  },
  // // header: {
  // //   backgroundColor: 'black',
  // //   width: width,
  // //   height: 25,
  // //   borderBottomStartRadius: 50,
  // //   borderBottomEndRadius: 50,
  // },
  main: {
    alignSelf: 'center',
  },
  img: {
    width: 500,
    height: 200,
    marginTop: 100,
  },
  footer: {
    width: width,
    height: 50,
    marginTop: 209,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    borderTopWidth: 1,
  },
  textfooter1: {
    fontSize: 10,
    color: '#596275',
    alignSelf: 'center',
    marginTop: 13,
  },
  textfooter2: {
    fontSize: 10,
    color: '#596275',
    alignSelf: 'center',
    marginTop: 1,
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderBottomWidth: 0.5,
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
    marginBottom: 15,
  },
  signinButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 15,
    width: 125,
    height: 35,
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  signinText: {
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
    width: 125,
    height: 35,
    borderRadius: 15,
  },
  signupText: {
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  dummycontainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 15,
  },
});

export default styles;