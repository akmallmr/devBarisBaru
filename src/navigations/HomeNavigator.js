import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home/Home'


const HomeNavigator = createStackNavigator (
    {
        Home: { screen: Home }
    },
    {
        headerMode: "none",
        initialRouteKey: "Home"
    }
)

export default HomeNavigator