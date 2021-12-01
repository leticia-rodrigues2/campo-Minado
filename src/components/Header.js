import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default props => {
  return (
    <View style={styles.container}> 
     
      <View style = {styles.flagContainer}>  
        <TouchableOpacity onPress={props.onFlagPress} 
        style={styles.flagButton}>
        <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
      
      </View>

    <TouchableOpacity style={styles.button} 
      onPress={props.onNewGame}>
      <Text style = {styles.buttonLabel}>JOGAR NOVAMENTE </Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    flexDirection: 'row' ,
    backgroundColor:'#b275f3',
    alignItems:'center',
    paddingTop:20,
    paddingHorizontal:20,
  },

  flagContainer:{
    flexDirection:'row',
  },

  flagButton:{
    marginTop:10,
    minWidth:30
  },

  flagsLeft :{
    fontSize:30,
    fontWeight:'bold',
    paddingTop:5,
    marginLeft:20,
  },

  button :{
    backgroundColor:'pink',
    padding: 7,
    borderRadius:17,
  },

  buttonLabel:{
    fontSize:20,
    color: 'black',
    fontWeight:'bold',
  }



})