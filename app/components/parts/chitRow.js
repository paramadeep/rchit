'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var ChitRow = React.createClass({
  openChitDetails(){
    this.props.navigator.push({screen: this.props.screens.chitDetails, data: this.props.chit})
  },
  render() {
    return(
      <TouchableHighlight onPress={this.openChitDetails}>
        <Text>{this.props.chit.name}</Text>
      </TouchableHighlight>
    );
}
});

var styles=StyleSheet.create({

});

module.exports=ChitRow;
