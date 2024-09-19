import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabBar = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF8811",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "black",
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="seeAllNowPlaying"
        options={{
          href: null,
          // headerShown: true,
          // headerStyle: {backgroundColor: "#FF8811"},
        }}
      />
      <Tabs.Screen
        name="seeAllTV"
        options={{
          href: null,
          // headerShown: true,
          // headerStyle: {backgroundColor: "#FF8811"},
        }}
      />
      <Tabs.Screen
        name="seeAllPopularMovies"
        options={{
          href: null,
          // headerShown: true,
          // headerStyle: {backgroundColor: "#FF8811"},
        }}
      />
      <Tabs.Screen
        name="seeAllPopularSeries"
        options={{
          href: null,
          // headerShown: true,
          // headerStyle: {backgroundColor: "#FF8811"},
        }}
      />
      <Tabs.Screen
        name="seeAllTopRatedMovies"
        options={{
          href: null,
          // headerShown: true,
          // headerStyle: {backgroundColor: "#FF8811"},
        }}
      />
    </Tabs>
  );
};

export default TabBar;
