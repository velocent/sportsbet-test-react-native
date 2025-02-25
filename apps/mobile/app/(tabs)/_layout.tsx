import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        // headerStyle: {
        //   backgroundColor: "#25292e",
        // },
        // headerShadowVisible: false,
        // headerTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sports",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "american-football" : "american-football-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="featured"
        options={{
          title: "Featured",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "ribbon" : "ribbon-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mybets"
        options={{
          title: "My Bets",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
