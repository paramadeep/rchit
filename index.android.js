'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

var screens = require('./app/screens')

var chitApp = React.createClass({
  render() {
    return <Navigator
      initialRoute={{screen:screens.allChits,screens:screens}}
      renderScene={(route,navigator) => {return route.screen(navigator,route.screens)} }
    />
  },
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('chit', () => chitApp);
