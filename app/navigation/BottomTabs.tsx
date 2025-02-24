import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { View, Text } from "react-native";

type TabParamList = {
  Sports: undefined;
  Featured: undefined;
  MyBets: undefined;
  Social: undefined;
  Reward: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const DummyScreen: React.FC<{ title: string }> = ({ title }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
  </View>
);

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Sports" component={HomeScreen} />
      <Tab.Screen
        name="Featured"
        component={() => <DummyScreen title="Featured" />}
      />
      <Tab.Screen
        name="MyBets"
        component={() => <DummyScreen title="My Bets" />}
      />
      <Tab.Screen
        name="Social"
        component={() => <DummyScreen title="Social" />}
      />
      <Tab.Screen
        name="Reward"
        component={() => <DummyScreen title="Reward" />}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
