'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  StyleSheet,
} = React;

var Title= React.createClass({
  render(){
    return (<Text style={styles.title}>{this.props.value}</Text>);
  }
})

var styles=StyleSheet.create({
  title:{
    textAlign:'center',
    flex:1 
  }
})

module.exports=Title;
