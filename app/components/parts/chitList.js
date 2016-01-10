'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var chit=require('../../models/chit')

var ChitList= React.createClass({
  getInitialState() { 
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    return {
      ds: ds,
      dataSource: [],
      loaded: false
    }; 
  },
  renderRow(value){
    return(<Text>{value.name}</Text>);
  },
  fetchData(){
    chit.all().
      then((allChits)=>{
        if(this.state.dataSource.length != allChits.length){
        this.setState({
          dataSource: allChits
        })}
      }).
        done()
  },

  render() {
    this.fetchData()
    return(
      <ListView dataSource={this.state.ds.cloneWithRows(this.state.dataSource)} renderRow={this.renderRow} />
    );
  }
});

var styles=StyleSheet.create({

});

module.exports=ChitList;
