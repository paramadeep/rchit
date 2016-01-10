'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View,
} = React;

var Chit=require('../../models/chit')

var AddChit = React.createClass({
  getInitialState() { 
    return { 
      name: null, 
    }; 
  },
  updateName(e){
    this.setState({
      name: e.nativeEvent.text
    }) 
  },
  addNewChit(){
    var name = this.state.name;
    Chit.addChit({name: name}).
      then(this.props.navigator.pop()).
          done()
  },
  render() {
    return(
      <View>
        <Text>hi</Text>
        <TextInput onChange={this.updateName} value={this.state.name}/>
        <TouchableHighlight style={styles.button} onPress={this.addNewChit}> 
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles=StyleSheet.create({

});
module.exports=AddChit
