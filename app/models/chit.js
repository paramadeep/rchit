'use strict';

var React = require('react-native');
var data = React.AsyncStorage;

var Chit= function()  {

  var chitKey = "chit";

  this.allChitSummary = function(){
    return featchChitForDataStore() 
  }

  this.byId= function(chitId){
    getChit().then((allChits)=> allChits[chitId])
  }

  this.addChit= function(value){
    return data.setItem(chitKey,JSON.stringify(value))
  }

  var getChit = function(){
    return featchChitForDataStore().then((value)=> JSON.parse(value))
  }

  var featchChitForDataStore = function(){
    return data.getItem(chitKey).
      then((value)=> value).
        catch(()=>{data.setItem(chitKey,"{}"); return {}})
  }
}

module.exports=new Chit();
