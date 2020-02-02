import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from "react-native";

class Show extends Component {
  constructor(props) {  
    //constructor to set default state  
    super(props);

    this.state = {
      name:'',
      code:'',
      location:'',
      days:'',
      Start: null,
      End: null,
  
    }
  }

  componentDidMount(){
    const name = this.props.navigation.getParam('name','No New Data');
    this.setState({name});

    const code = this.props.navigation.getParam('code', 'No New Data');
    this.setState({code});

    const location = this.props.navigation.getParam('location', 'No New Data');
    this.setState({location});

    const days = this.props.navigation.getParam('days', 'No New Data');
    this.setState({days});

    const Start = this.props.navigation.getParam('Start', 'No New Data');
    this.setState({Start});

    const End = this.props.navigation.getParam('End', 'No New Data');
    this.setState({End});
    }

  render(){

    const {name,code,location,days,Start,End}=this.state;

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
              onPress={() =>this.props.navigation.navigate('Add_Vacation_Request', { })
              } />
      </View>
    );
  }
}

export default Show;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
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
    textAlign: 'justify',
    lineHeight: 30,
  }
});
