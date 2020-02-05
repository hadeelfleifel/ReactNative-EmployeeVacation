//Communication between native and React Native
//To define a React component class, you need to extend React.Component
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

//Classes support prototype-based inheritance, super calls, instance and static methods and constructors
//To define a React component class, you need to extend React.Component
class Add extends Component {
  //when an instance of a component is being created and inserted into the DOM:
  // called before it is mounted
      //constructor to set default state
//Initializing local state by assigning an object to this.state.
//Binding event handler methods to an instance.
  constructor(props) {
    //you should call super(props) before any other statement. 
    //Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    super(props);
//global function 
    this.state = {
      name: "",
      code: "",
      location: "",
      days: "",
      selectedStartDate: null,
      selectedEndDate: null
    };
//this => actually refers to the originating context. That’s called Lexical Scoping if you’re into naming things
//using bind to create a function (supplied as a callback) 
//if i have arrow function not need uo use this 
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    //function to handle the date change
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null
      });
    }
  }

  //The only method you must define in a React.Component subclass is called render()
              //setState() enqueues changes to the component state and 
            //tells React that this component and its children need to be re-rendered with the updated state.
  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2018, 1, 1); // Min date
    const maxDate = new Date(2050, 6, 3); // Max date
    const startDate = selectedStartDate ? selectedStartDate.toString() : ""; //Start date
    const endDate = selectedEndDate ? selectedEndDate.toString() : ""; //End date
    const { navigate } = this.props.navigation;
//this.props.navigation: the navigation prop is passed in to every screen component
// (definition) in stack navigator (more about this later in "The navigation prop in depth").
//navigate('Details'): we call the navigate function (on the navigation prop — naming is hard!)
// with the name of the route that we'd like to move the user to.

//he navigate function roughly means "go to this screen",
    return (
      // to return multiple elements
      <>
        <View style={styles.container}>
          <Text>Employee Name</Text>
          <TextInput
          editable
            placeholder="Enter your Name Here"
            onChangeText={name => this.setState({ name })}

          />
          

          <Text>Employee Code</Text>
          <TextInput
          editable
            placeholder="EX: 152 -156"
            onChangeText={code => this.setState({ code })}
          />

          <Text>Employee Location</Text>
          <TextInput
            placeholder="EX: Jordan -Amman"
            multiline={true}
            numberOfLines={4}
            onChangeText={location => this.setState({ location })}
          />

          <Text>Number Of Vacation Days</Text>
          <TextInput
          editable
            placeholder="EX: 2 week's "
            onChangeText={days => this.setState({ days })}
          />

          <Text>Select Start-End Date</Text>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
            months={[
              "January",
              "Febraury",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ]}
            previousTitle="Previous"
            nextTitle="Next"
            todayBackgroundColor="#e6ffe6"
            selectedDayColor="#66ff33"
            selectedDayTextColor="#000000"
            scaleFactor={375}
            textStyle={{
              color: "#000000"
            }}
            // is24Hour={false}
            onDateChange={this.onDateChange}
          />

          <Button
            title="Touch Here"
            onPress={() =>
              navigate("Show", {
                name: this.state.name,
                code: this.state.code,
                location: this.state.location,
                days: this.state.days,
                Start: startDate,
                End: endDate
              })
            }
          />
        </View>
      </>
    );
  }
}

export default Add;
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
  button: {
    backgroundColor: "pink"
  }
});
