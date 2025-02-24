import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";

type BetItemProps = {
  amount: number;
};

const BetItemSingle: React.FC<BetItemProps> = ({ amount }: BetItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          padding: 8,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.rightPanel}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <View>
            <Typography size="lg" weight="medium" style={{ marginBottom: 12 }}>
              Warrios vs Bucks
            </Typography>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/team_kings.png")}
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Typography weight="bold" size="lg">
                Warriors -3.5
              </Typography>
            </View>
          </View>
          <View>
            <Typography style={{ color: "rgba(255,255,255,0.8)" }} size="sm">
              End at: 8:00 PM EST
            </Typography>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography size="lg" weight="medium">
            -120
          </Typography>
          <View
            style={{
              backgroundColor: "#444",
              borderRadius: 4,
              paddingVertical: 4,
              paddingHorizontal: 12,
              minWidth: 100,
            }}
          >
            <Typography weight="semibold" style={{ textAlign: "right" }}>
              {amount}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#4e4e4e",
    borderRadius: 10,
    marginBottom: 8,
  },
  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default BetItemSingle;
