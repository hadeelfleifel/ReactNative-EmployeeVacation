import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Home extends Component {
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
    flex: 1,
    justifyContent: "center"
  },
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: 55
  }
});
