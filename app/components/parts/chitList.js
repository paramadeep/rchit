'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Text,
} = React;

var ChitRow=require('./chitRow')
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 

var ChitList= React.createClass({
  renderRow(value){
    return(<ChitRow chit={value} navigator={this.props.navigator} screens={this.props.screens} />)
  },
  render() {
    return(
      <ListView dataSource={ds.cloneWithRows(this.props.chits)} renderRow={this.renderRow} />
    );
  }
});

var styles=StyleSheet.create({

});

module.exports=ChitList;
