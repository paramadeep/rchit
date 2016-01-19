'use strict';

var React = require('react-native');
var AllChits =  require('./components/screens/allChits')
var AddChit =  require('./components/screens/addChit')
var ChitDetails =  require('./components/screens/chitDetails')

var Screens = {
  allChits:(navigator)=><AllChits navigator={navigator} screens={Screens} />,
    addChit:(navigator)=><AddChit navigator={navigator} />,
      chitDetails:(navigator,chit)=><ChitDetails navigator={navigator} chit={chit}/>,
}

module.exports=Screens;
