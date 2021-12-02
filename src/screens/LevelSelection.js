import React from "react";
import { View,StyleSheet,Text,TouchableOpacity,Modal } from "react-native";

export default props =>{
  return(
    <Modal onRequestClose={props.onCancel}
    visible = {props.isVisible} animationType = 'slide'
    transparent = {true}>
      <View style = {styles.frame}>
        <Text style={styles.container,styles.title}>Selecione o Nível</Text>

        <TouchableOpacity 
          style = {[styles.button , styles.bgEasy]}
          onPress = {() => props.onLevelSelected(0.1)}>
          <Text style={styles.buttonLabel}>Fácil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style = {[styles.button , styles.bgNormal]}
          onPress = {() => props.onLevelSelected(0.2)}>
          <Text style={styles.buttonLabel}>Intermediário</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style = {[styles.button , styles.bgHard]}
          onPress = {() => props.onLevelSelected(0.3)}>
          <Text style={styles.buttonLabel}>Difícil</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame:{
    flex: 2,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent: 'center',
    
  },
  container:{
    backgroundColor: 'pink',
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    fontSize:35,   
  },

  title :{
    fontSize:35,
    fontWeight:'bold',
  },
  button:{
    marginTop:10,
    padding: 25,
    borderRadius:15,
  },
  buttonLabel :{
    fontSize:30,
    color: '#EEE',
    fontWeight:'bold',
  },
  bgEasy:{
    backgroundColor:'#49b65d',
  },
  bgNormal:{
    backgroundColor:'#2765f7',
  },
  bgHard:{
    backgroundColor: '#F26337',
  },
})