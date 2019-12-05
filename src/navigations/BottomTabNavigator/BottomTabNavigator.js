import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// import WelcomeScreen from '../screens/Welcome'
import HomeScreen from '../screens/Home'
import Screen2 from '../screens/Screen2'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Screen2: Screen2
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

export default BottomTabNavigator;


