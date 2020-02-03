import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Show extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);

    this.state = {
      name: "",
      code: "",
      location: "",
      days: "",
      selectedStartDate: null,
      selectedEndDate: null
    };
  }
  render() {
    // const { name, code, location, days, Start, End } = this.state;
    const {
      name,
      code,
      location,
      days,
      Start,
      End
    } = this.props.navigation.state.params;
    // console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Text style={styles.bodyContent}>second Screen</Text>
        <Text style={styles.text}>Employee Name: {name}</Text>
        <Text style={styles.text}>Employee Code: {code}</Text>
        <Text style={styles.text}>Employee Location: {location}</Text>
        <Text style={styles.text}>Number of Vacation Days: {days}</Text>
        <Text style={styles.text}>Vacation Start Date: {Start}</Text>
        <Text style={styles.text}>Vacation End Date: {End}</Text>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Show;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContent: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
    backgroundColor: "#eee"
  },
  text: {
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 30
  }
});
