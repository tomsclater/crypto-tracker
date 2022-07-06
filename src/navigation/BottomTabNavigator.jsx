import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#303030",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              size={focused ? 40 : 25}
              color={color}
            />
          ),
        }}
      />

      {/* <Tab.Screen /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
