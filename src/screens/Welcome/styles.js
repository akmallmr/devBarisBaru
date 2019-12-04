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
    backgroundColor: '#f7f1e3',
    width: width,
    height: height,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#218c74',
    width: width,
    height: 75,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  main: {
    alignSelf: 'center',
  },
  img: {
    width: 500,
    height: 200,
  },
  button: {
    backgroundColor: '#218c74',
    width: 100,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 75,
  },
  textenter: {
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: '#218c74',
    width: width,
    height: 50,
    marginTop: 209,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  textfooter1: {
    fontSize: 10,
    color: '#f7f1e3',
    alignSelf: 'center',
    marginTop: 13,
  },
  textfooter2: {
    fontSize: 10,
    color: '#f7f1e3',
    alignSelf: 'center',
    marginTop: 1,
  },
});

export default styles;