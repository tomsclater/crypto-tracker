import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={HomeScreen} />
      {/* <Tab.Screen /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
