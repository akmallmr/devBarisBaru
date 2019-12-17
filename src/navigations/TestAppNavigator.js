import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import TestApp from '../screens/TestApp/TestApp'


const TestAppNavigator = createStackNavigator(
    {
        TestApp: { screen: TestApp }
    },
    {
        headerMode: "none",
        initialRouteKey: "TestApp"
    }
)

export default TestAppNavigator