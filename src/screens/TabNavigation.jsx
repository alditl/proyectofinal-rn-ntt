import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOut from "./LogOut";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "gray",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="LogOut"
        component={LogOut}
        options={{
          title: "Sign Out",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="logout" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title: "Fav",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
