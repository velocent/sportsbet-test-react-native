import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Typography } from "./Typography";

interface MatchCardProps1 {
  team1: string;
  team2: string;
  team1Logo: any;
  team2Logo: any;
  moneyline1: string;
  moneyline2: string;
  spread1: string;
  spread2: string;
  totalOver: string;
  totalUnder: string;
  endTime: string;
}

interface MatchCardProps {
  item: {
    team1: string;
    team2: string;
    team1Logo: any;
    team2Logo: any;
    moneyline1: string;
    moneyline2: string;
    spread1: string;
    spread2: string;
    totalOver: string;
    totalUnder: string;
    endTime: string;
  };
}

const GameMatchup = () => <View></View>;

const BetOption = ({ value, odds }: { value?: string; odds: string }) => (
  <View>
    {value && <Typography>{value}</Typography>}
    <Typography>{odds}</Typography>
  </View>
);

const MatchCard: React.FC<MatchCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      {/* Main */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          gap: 1,
        }}
      >
        <View style={styles.teamWrapper}>
          <Typography>Hornets</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>-100</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>-3.5</Typography>
          <Typography>-100</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>O 234.5</Typography>
          <Typography>-100</Typography>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          gap: 8,
        }}
      >
        <View style={styles.teamWrapper}>
          <Typography>Kings</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>-100</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>-100</Typography>
          <Typography>-100</Typography>
        </View>
        <View style={styles.scoreBox}>
          <Typography>-100</Typography>
          <Typography>-100</Typography>
        </View>
      </View>

      {/* Show status */}
      <View></View>
    </View>
  );
  return (
    <View style={styles.card}>
      <View style={styles.teamsContainer}>
        <View style={styles.teamRow}>
          <Image source={item.team1Logo} style={styles.teamLogo} />
          <Text style={styles.teamText}>{item.team1}</Text>
        </View>
        <Text style={styles.vsText}>VS</Text>
        <View style={styles.teamRow}>
          <Image source={item.team2Logo} style={styles.teamLogo} />
          <Text style={styles.teamText}>{item.team2}</Text>
        </View>
      </View>
      <View style={styles.oddsContainer}>
        <View style={styles.oddsColumn}>
          <Text style={styles.oddsText}>{item.moneyline1}</Text>
          <Text style={styles.oddsText}>{item.spread1}</Text>
          <Text style={styles.oddsText}>{item.totalOver}</Text>
        </View>
        <View style={styles.oddsColumn}>
          <Text style={styles.oddsText}>{item.moneyline2}</Text>
          <Text style={styles.oddsText}>{item.spread2}</Text>
          <Text style={styles.oddsText}>{item.totalUnder}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    // backgroundColor: "#1e1e1e",
    padding: 16,
    // borderRadius: 10,
    borderBottomColor: "#30353D",
    borderBottomWidth: 1,
  },
  betOptionWrapper: {
    borderColor: "#30353D",
    borderWidth: 1,
    // width: 64,
    // height: 64,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 4,
  },
  teamWrapper: {
    backgroundColor: "#30353D",
    // flex: 1,
    height: "100%",
    // marginRight: 8,
    borderRadius: 4,
  },
  scoreBox: {
    borderColor: "#30353D",
    borderWidth: 1,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 4,
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamLogo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  teamText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  vsText: {
    color: "#aaa",
    fontSize: 18,
  },
  oddsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  oddsColumn: {
    alignItems: "center",
  },
  oddsText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 2,
  },
});

export default MatchCard;
