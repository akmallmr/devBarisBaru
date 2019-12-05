import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Welcome from './src/screens/Welcome/index'

import Router from './src/navigations/Router'

export default class App extends Component {
  render (){
    return(
      <Router/>
    )
  }
}