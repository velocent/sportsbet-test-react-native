import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BetCardProps {
  match: {
    team1: string;
    team2: string;
    moneyline1: string;
    moneyline2: string;
    spread1: string;
    spread2: string;
    total: string;
  };
}

const BetCard: React.FC<BetCardProps> = ({ match }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.team}>
        {match.team1} vs {match.team2}
      </Text>
      <View style={styles.betContainer}>
        <Text style={styles.bet}>
          Moneyline: {match.moneyline1} / {match.moneyline2}
        </Text>
        <Text style={styles.bet}>
          Spread: {match.spread1} / {match.spread2}
        </Text>
        <Text style={styles.bet}>Total: {match.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  team: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  betContainer: {
    flexDirection: "column",
  },
  bet: {
    color: "#bbb",
    fontSize: 16,
  },
});

export default BetCard;
