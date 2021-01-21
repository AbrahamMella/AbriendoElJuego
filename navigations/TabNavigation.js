import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import PreviousEpisodes from "../screens/PreviousEpisodes";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#1B4D90",
      labelStyle: { fontWeight: "bold" },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="PreviousEpisodes"
      component={PreviousEpisodes}
      options={{
        title: "Programas anteriores",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="database-search"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;