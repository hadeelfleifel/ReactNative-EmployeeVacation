import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Home extends Component {

  //DOM, abbreviated as Document Object Model,
  // is a World Wide Web Consortium standard logical representation of any webpage.
  // In easier words, DOM is a tree-like structure that contains all the elements
  // and it’s properties of a website as it’s nodes. DOM provides a language-neutral interface 
  //that allows accessing and updating of the content of any element of a webpage.
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Home</Text>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center"
  },
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: 55
  }
});
