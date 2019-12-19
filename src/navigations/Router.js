import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import * as firebase from 'firebase'


import AuthNavigator from '../navigations/AuthNavigator'
import TestAppNavigator from '../navigations/TestAppNavigator'

import LoadingScreen from '../screens/Auth/Loading/index';
import Home from '../screens/Home/Home'
import TestApp from '../screens/TestApp/TestApp'
import Pomodoro from '../screens/Pomodoro/Pomodoro'
import Screen1 from '../screens/Home/Screen1/Screen1'
import Screen2 from '../screens/Home/Screen2/Screen2'
import Screen3 from '../screens/Home/Screen3/Screen3'
import Screen4 from '../screens/Home/Screen4/Screen4'




var firebaseConfig = {
  apiKey: 'AIzaSyCkFaslXf2iY_nZhCmZ6ZBd-32Whn_mKag',
  authDomain: 'barisbarudev-b33f6.firebaseapp.com',
  databaseURL: 'https://barisbarudev-b33f6.firebaseio.com',
  projectId: 'barisbarudev-b33f6',
  storageBucket: 'barisbarudev-b33f6.appspot.com',
  messagingSenderId: '1064638820963',
  appId: '1:1064638820963:web:9ee4435ac7054522643e56',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const HomeStack = createStackNavigator (
    {
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerRight: (
                    <Icon2
                        style={{ padding: 10, marginRight: 15 }}
                        onPress={() => navigation.navigate('Auth')}
                        name="logout"
                        size={25} />
                ),
                headerTitle: 'Welcome',
            }),
        },
        Screen1: { 
            screen: Screen1,
                navigationOptions: ({navigation}) => ({
                    title: 'Screen1',
                }) 
        },
        Screen2: { screen: Screen2 },
        Screen3: { screen: Screen3 },
        Screen4: { screen: Screen4 },
    },{
        initialRouteName: 'Home',
        headerLayoutPreset: 'center'
    })


const DashboardTabNavigator = createBottomTabNavigator (
    {
        Home: { 
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon1 
                        style= {{padding: 10, color: '#FFF'}}
                        name= "ios-home"
                        size= {25} />
                )
            } 
        },
        TodoApp: { 
            screen: TestApp,
            navigationOptions:{
            tabBarIcon: ({tintColor}) => (
                    <Icon1
                        style= {{padding: 10, color: '#FFF'}}
                        name= "ios-bookmarks"
                        size= {25} />
                )
            },
        },
        Pomodoro: { 
            screen: Pomodoro,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon1
                        style={{ padding: 10, color:'#FFF' }}
                        name="ios-stopwatch"
                        size={25} />
                )
            }
         }
},
{
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#F97F51',
        inactiveBackgroundColor: 'black',
        inactiveTintColor: 'white'
    },
    initialRouteKey: "Home",
})

const DashboardStackNavigator = createStackNavigator ({
    DashboardTabNavigator: DashboardTabNavigator
},{
    headerMode: 'none'
})

const RootNavigator = createSwitchNavigator(
    {
        Loading: { screen: LoadingScreen },
        Auth: { screen: AuthNavigator },
        Main: { screen: DashboardStackNavigator }
    },
    {
        header: "none",
        initialRouteKey: "Loading"
    }
)

export default createAppContainer(RootNavigator)



