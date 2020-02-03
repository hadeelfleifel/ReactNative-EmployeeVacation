import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

class Add extends Component {
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

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2018, 1, 1); // Min date
    const maxDate = new Date(2050, 6, 3); // Max date
    const startDate = selectedStartDate ? selectedStartDate.toString() : ""; //Start date
    const endDate = selectedEndDate ? selectedEndDate.toString() : ""; //End date
    const { navigate } = this.props.navigation;

    return (
      <>
        <View style={styles.container}>
          <Text>Employee Name</Text>
          <TextInput
          editable
            placeholder="Enter your Name Here"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
            required={true}
          />

          <Text>Employee Code</Text>
          <TextInput
          editable
            placeholder="EX: 152 -156"
            underlineColorAndroid="transparent"
            onChangeText={code => this.setState({ code })}
          />

          <Text>Employee Location</Text>
          <TextInput
          editable
            placeholder="EX: Jordan -Amman"
            multiline={true}
            numberOfLines={4}
            underlineColorAndroid="transparent"
            onChangeText={location => this.setState({ location })}
          />

          <Text>Number Of Vacation Days</Text>
          <TextInput
          editable
            placeholder="EX: 2 week's "
            underlineColorAndroid="transparent"
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
