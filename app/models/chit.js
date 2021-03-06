'use strict';

var React = require('react-native');
var data = React.AsyncStorage;

var Chit= function()  {

  var chitKey = "chit";

  this.all = function(){
    return featchChitForDataStore().then((value)=>JSON.parse(value)) 
  }

  this.deleteAll = function(){
    return data.removeItem(chitKey);
  }

  this.addChit= function(value){
    return  this.all().
      then((currentData)=>{
        currentData.unshift(value);
        return data.setItem(chitKey,JSON.stringify(currentData))
      })
  }

  var featchChitForDataStore = function(){
    return data.getItem(chitKey).
      then((value)=> value ? value: '[]').
        catch(()=>{data.setItem(chitKey,"[]"); return {}})
  }
}

module.exports=new Chit();
