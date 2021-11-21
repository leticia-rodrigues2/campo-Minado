import React , {Component} from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import params from "./src/param";

export default class App extends Component {
render(){
  return(
    <View>
    <Text> INIICIANDO MINES</Text>
    <Text> Tamanho da grade :
      {params.getRowsAmount()}x{params.getColumnsAmount()}
    </Text>
    </View>
  );
}
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

