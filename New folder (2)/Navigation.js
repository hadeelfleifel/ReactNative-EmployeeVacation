import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Add from "./screens/AddRequest";
import Show from "./screens/ShowRequest";

const Add_Vacation_Request = createStackNavigator({
  Add
});
const Show_Vacation_Request = createStackNavigator({
  Show
});

Add_Vacation_Request.navigationOptions = {
  tabBarLabel: "Add Vacation Request",
};
Show_Vacation_Request.navigationOptions = {
  tabBarLabel: "Show Vacation Request"
};

const tabNavigator = createBottomTabNavigator({
  Add_Vacation_Request,
  Show_Vacation_Request,
});
let mainNavigator = createSwitchNavigator({
  tabNavigator
});
const container = createAppContainer(mainNavigator);
export default container;
