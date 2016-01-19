'use strict';

var React = require('react-native');
var MK = require('react-native-material-kit');
var {
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} = React;

var {
  MKButton,
  MKColor,
} = MK;

var Title = require('../parts/title');
var ChitList = require('../parts/chitList')
var chit=require('../../models/chit')
const AccentColoredFab = MKButton.accentColoredFab()
  .build();
var AllChits = React.createClass({
  getInitialState() { 
    return {
      chits: [],
    }; 
  },
  addChit(){
    this.props.navigator.push({screen:this.props.screens.addChit});
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
            <Image source={require('../../icons/ic_action_ic_add_circle_black_24dp.png')} />
          </TouchableHighlight>
        </View>
        <ChitList screens={this.props.screens} navigator={this.props.navigator} chits={this.state.chits}/>
        <AccentColoredFab
          backgroundColor={MKColor.Teal}
          shadowRadius={2}
          shadowOffset={{width:0, height:2}}
          shadowOpacity={.7}
          shadowColor="black"
          onPress={() => {
          console.log('hi, raised button!');
          }}
          >
          <Text pointerEvents="none"
            style={{color: 'white', fontWeight: 'bold',}}>
            +
          </Text>
        </AccentColoredFab>
      </View>);
        },
        });

        var styles = StyleSheet.create({
          container: {
          },
          header:{
            flexDirection: 'row',
            backgroundColor: '#689F38',
            height: 80,
            flexWrap: 'nowrap',
            alignItems:'center'
          },
          addButton:{
            textAlign: "center"
          }
        });


        module.exports=AllChits;
