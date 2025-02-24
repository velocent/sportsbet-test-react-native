import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import BetCard from "../components/BetCard";

interface Match {
  team1: string;
  team2: string;
  moneyline1: string;
  moneyline2: string;
  spread1: string;
  spread2: string;
  total: string;
}

const matches: Match[] = [
  {
    team1: "Warriors",
    team2: "Bucks",
    moneyline1: "-110",
    moneyline2: "+140",
    spread1: "-3.5",
    spread2: "+3.5",
    total: "234.5",
  },
  {
    team1: "Hornets",
    team2: "Kings",
    moneyline1: "-110",
    moneyline2: "+140",
    spread1: "-3.5",
    spread2: "+3.5",
    total: "234.5",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>NBA</Text>
      {matches.map((match, index) => (
        <BetCard key={index} match={match} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 10 },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
