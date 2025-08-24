import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Color } from "../../assets/Color";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.PRIMARY,
        tabBarInactiveTintColor: Color.dark.text,
        tabBarStyle: {
          backgroundColor: Color.SECONDARY,
          paddingBottom: 14,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="History" options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time" size={24} color={color} />
          ),
        }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile",tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={24} color={color} />
          ), }} />
    </Tabs>
  );
};

export default TabLayout;
