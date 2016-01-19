'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var ChitDetails= React.createClass({
  render() {
    return(
      <View>
        <Text>{this.props.chit.name}</Text>
      </View>
    );
  }
});

var styles=StyleSheet.create({

});

module.exports=ChitDetails;
