import React, { Component } from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Auth from '../screens/Auth/index'

const AuthNavigator = createStackNavigator (
    {
        Auth: { screen: Auth }
    },
    {
        headerMode: "none",
        initialRouteKey: "Auth"
    }
)

export default AuthNavigator