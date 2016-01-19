'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} = React;

var Title = require('../parts/title');
var ChitList = require('../parts/chitList')
var chit=require('../../models/chit')

var AllChits = React.createClass({
  getInitialState() { 
    return {
      chits: [],
    }; 
  },
  addChit(){
    this.props.navigator.push({screen:this.props.screens.addChit});
  },
  deleteChit(){
    chit.deleteAll().then(   
    this.setState({
      chits: []
    }))
  },
  fetchData(){
    chit.all().
      then((allChits)=>{
        if( !allChits || this.state.chits.length != allChits.length){
          this.setState({
            chits: allChits
          })}
      }).
        done()
  },
  render(){
    this.fetchData()
    return(
      <View style={styles.container}>
        <View style={styles.header}> 
          <Title value={'All chits'}/>
          <TouchableHighlight onPress={this.addChit}>
            <Image source={require('../../icons/ic_add_black_24dp.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.deleteChit}>
            <Image source={require('../../icons/ic_add_circle_black_24dp.png')} />
          </TouchableHighlight>
        </View>
        <ChitList screens={this.props.screens} navigator={this.props.navigator} chits={this.state.chits}/>
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
