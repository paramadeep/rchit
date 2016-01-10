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
      dataSource: ds,
      loaded: false
    }; 
  },
  renderRow(value){
    return(<Text>{value.name}</Text>);
  },
  fetchData(){
    chit.all().
      then((allChits)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(allChits)
        })
      }).
        done()
  },
  componentDidMount() { 
    this.fetchData(); 
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
