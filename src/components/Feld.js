import React from "react";
import { View,StyleSheet } from "react-native";
import params from "../params";

export default props => {
  const styleField = [styles.field]
  // Outros estilos aqui !
  if (styleField.length === 1) styleField.push(styles.regilar)

  return (
    <View style = {styleField}></View>
  )
}

const styles = StyleSheet.create({
  field:{
    height : params.blocksize,
    width: params.blocksize,
    borderWidth:params.borderSize,
  },
  regular:{
    backgroundColor: '#999',
    bordeLeftColor:'#CCC',
    bordeTopColor :'#CCC',
    bordeRighrColor:'#333',
    borderBottomColor: '#333',
  }
  
})