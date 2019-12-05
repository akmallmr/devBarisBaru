import React from 'react'
import { 
    createAppContainer, 
    createSwitchNavigator 
        } from 'react-navigation'

import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator'

export default createAppContainer (
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
);



