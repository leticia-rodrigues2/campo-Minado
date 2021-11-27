import React from "react";
import { View,StyleSheet } from "react-native";

export default props => {
  return(
    <View style = {StyleSheet.container}>
      <View style ={ StyleSheet.flagpole}/>
      <View style ={ StyleSheet.flag}/>
      <View style ={ StyleSheet.base1}/>
      <View style ={ StyleSheet.base2}/>
    </View>
  )
}
const styles = StyleSheet.create ({
  container:{
    marginTop:2,
  },

  flagpole :{
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor:'#222',
    marginLeft:9,
  },

  flag :{
    position: 'absolute',
    height:5,
    width:6,
    backgroundColor:'#f22',
    marginLeft:3,
  },
  
  base1:{
    position: 'absolute',
    height: 2,
    width:6,
    backgroundColor:'#222',
    marginLeft:7,
    marginTop:10,
  },

  bese2:{
    position: 'absolute',
    height: 2,
    width:10,
    backgroundColor:'#222',
    marginLeft:5,
    marginTop:12,
  }

})