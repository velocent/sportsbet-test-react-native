import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
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
  item?: {
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

const GameMatchupItem = ({ logo, name }: { logo: any; name: string }) => (
  <View style={styles.gameMatchupItem}>
    <Image
      source={logo}
      style={{
        width: 32,
        height: "100%",
        marginRight: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
      }}
    />
    <Typography>{name}</Typography>
  </View>
);

const GameMatchup = () => (
  <View style={styles.gameMatchupContainer}>
    <GameMatchupItem
      logo={require("../../assets/images/team_warriors.png")}
      name="Warriors"
    />
    <GameMatchupItem
      logo={require("../../assets/images/team_bucks.png")}
      name="Bucks"
    />
    <Typography style={styles.vsText} size="sm" weight="semibold">
      VS
    </Typography>
  </View>
);

const BetOption = ({
  value,
  odds,
  active = false,
  onClick,
}: {
  value?: string;
  odds: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <TouchableOpacity
    style={active ? styles.betOptionContainerActive : styles.betOptionContainer}
    activeOpacity={0.8}
    onPress={() => {
      onClick && onClick();
    }}
  >
    {value && <Typography style={{ opacity: 0.6 }}>{value}</Typography>}
    <Typography weight="semibold">{odds}</Typography>
  </TouchableOpacity>
);

const MatchCard: React.FC<MatchCardProps> = ({ item }) => {
  const [betOption1, setBetOption1] = React.useState([false, false, false]);
  const [betOption2, setBetOption2] = React.useState([false, false, false]);

  const handleBetOption1Click = (team: 1 | 2, method: number) => () => {
    if (team === 1) {
      const newBetOption = [...betOption1];
      newBetOption[method] = !newBetOption[method];
      setBetOption1(newBetOption);
    } else {
      const newBetOption = [...betOption2];
      newBetOption[method] = !newBetOption[method];
      setBetOption2(newBetOption);
    }
  };

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <GameMatchup />
        <View>
          <View style={styles.betOptionRow}>
            <BetOption
              odds="-110"
              active={betOption1[0]}
              onClick={handleBetOption1Click(1, 0)}
            />
            <BetOption
              odds="-110"
              value="-3.5"
              active={betOption1[1]}
              onClick={handleBetOption1Click(1, 1)}
            />
            <BetOption
              odds="-110"
              value="O 234.5"
              active={betOption1[2]}
              onClick={handleBetOption1Click(1, 2)}
            />
          </View>

          <View style={styles.betOptionRow}>
            <BetOption
              odds="+140"
              active={betOption2[0]}
              onClick={handleBetOption1Click(2, 0)}
            />
            <BetOption
              odds="-110"
              value="+3.5"
              active={betOption2[1]}
              onClick={handleBetOption1Click(2, 1)}
            />
            <BetOption
              odds="-110"
              value="U 234.5"
              active={betOption2[2]}
              onClick={handleBetOption1Click(2, 2)}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              style={styles.avatarImg}
              source={require(`../../assets/images/man1.png`)}
            />
          ))}
          <Typography
            style={{
              backgroundColor: "#485160",
              width: 28,
              height: 28,
              borderRadius: 28,
              borderWidth: 2,
              borderColor: "#1B1E23",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            size="sm"
            weight="medium"
          >
            +4
          </Typography>
        </View>

        <Typography size="sm" style={{ opacity: 0.6 }}>
          Ends at: 8:00 PM EST
        </Typography>
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
  betOptionContainer: {
    borderColor: "#30353D",
    borderWidth: 1,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 4,
  },
  betOptionContainerActive: {
    borderColor: "#FFE100",
    backgroundColor: "rgba(255, 225, 0, 0.1)",
    borderWidth: 1,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 4,
  },
  betOptionRow: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginBottom: 12,
  },
  gameMatchupItem: {
    backgroundColor: "#30353D",
    marginBottom: 12,
    height: 64,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  gameMatchupContainer: {
    marginRight: 8,
    flex: 1,
  },
  vsText: {
    position: "absolute",
    left: 30,
    top: 60,
    backgroundColor: "#30353D",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#1B1E23",
    padding: 2,
  },
  avatarImg: {
    width: 28,
    height: 28,
    borderRadius: 100,
    marginRight: -5,
    borderWidth: 2,
    borderColor: "#1B1E23",
  },
});

export default MatchCard;
