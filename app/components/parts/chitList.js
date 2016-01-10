'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var ChitList= React.createClass({
  getInitialState() { 
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    return { 
      dataSource: ds.cloneWithRows(['a','b']), 
    }; 
  },
  renderRow(value){
    return(<Text>{value}</Text>);
  },

  render() {
    return(
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
    );
  }
});

var styles=StyleSheet.create({

});

module.exports=ChitList;
