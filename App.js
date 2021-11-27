import React , {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";

export default class App extends Component {
render(){
  return(
    <View style = {styles.container}>
      <Text style = {styles.welcome}> INIICIANDO MINES</Text>
      <Text style = {styles.instructions}> Tamanho da grade :
        {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      
      <Field/>
      <Field/>
      <Field opened nearMines ={1}/>
      <Field opened nearMines ={2}/>
      <Field opened nearMines ={3}/>
      <Field opened nearMines ={6}/>
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged/>
      <Field flagged opened/>
     
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign:'center',
    margin:10,
  },
  instructions: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

