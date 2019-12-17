import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import AuthNavigator from '../navigations/AuthNavigator'
import TestAppNavigator from '../navigations/TestAppNavigator'

import Home from '../screens/Home/Home'
import TestApp from '../screens/TestApp/TestApp'
import Pomodoro from '../screens/Pomodoro/Pomodoro'
import Screen1 from '../screens/Home/Screen1/Screen1'
import Screen2 from '../screens/Home/Screen2/Screen2'
import Screen3 from '../screens/Home/Screen3/Screen3'
import Screen4 from '../screens/Home/Screen4/Screen4'

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

// HomeStack.navigationOptions = ({navigation}) => {
//     let {routeName} = navigation.state.routes[navigation.state.index];
//     let navigationOptions = {};

//     if (routeName === Screen2) {
//         navigationOptions.tabBarVisible = false;
//     }
//     return navigationOptions;
// };

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
        TestApp: { 
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
    // navigationOptions: ({navigation}) => {
    //     return {
    //         headerRight: (
    //             <Icon2
    //                 style={{ padding: 10, marginRight: 15 }}
    //                 onPress={() => navigation.navigate('Auth')}
    //                 name="logout"
    //                 size={25} />
    //         )
    //     }
    // },
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
        Auth: { screen: AuthNavigator },
        Main: { screen: DashboardStackNavigator }
    },
    {
        header: "none",
        initialRouteKey: "Auth"
    }
)

export default createAppContainer(RootNavigator)



