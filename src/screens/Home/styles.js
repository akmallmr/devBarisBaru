import React, { Component } from 'react'
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

    export default styles;