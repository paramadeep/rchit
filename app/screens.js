'use strict';

var React = require('react-native');
var AllChits =  require('./components/screens/allChits')
var AddChit =  require('./components/screens/addChit')

var Screens = {
  allChits:(navigator,screens)=><AllChits navigator={navigator} screens={screens} />,
    addChit:(navigator,screens)=><AddChit navigator={navigator} screens={screens} />,
}

module.exports=Screens;
