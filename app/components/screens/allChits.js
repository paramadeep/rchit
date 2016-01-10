'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
} = React;

var Title = require('../parts/title');
var ChitList = require('../parts/chitList')

var AllChits = React.createClass({
  addChit(){
    this.props.navigator.push({screen:this.props.screens.addChit});
  },
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}> 
          <Title value={'All chits'}/>
          <TouchableHighlight onPress={this.addChit}>
            <Text style={styles.addButton}>+</Text>
          </TouchableHighlight>
        </View>
        <ChitList />
      </View>);
},
});

var styles = StyleSheet.create({
  container: {
  },
  header:{
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    height: 40,
    flexWrap: 'nowrap',
    alignItems:'center'
  },
  addButton:{
    textAlign: "center"
  }
});


module.exports=AllChits;
