import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { Typography } from "./Typography";

const betModeIcon1 = require("../../assets/images/crypto.png");
const betModeIcon2 = require("../../assets/images/fiat.png");

const PaymentModeSwitch: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.balanceContainer}>
      {isEnabled ? (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={["rgba(240, 46, 149, 0.4)", "rgba(240, 46, 149, 0)"]}
          style={styles.balanceBackground}
        />
      ) : (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={["rgba(21, 197, 74, 0.4)", "rgba(21, 197, 74, 0.1)"]}
          style={styles.balanceBackground}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={isEnabled ? betModeIcon1 : betModeIcon2}
          style={styles.tokenIcon}
        />
        <Typography headerFont={true} size="xl">12,000,000</Typography>
        {/* <Text style={styles.balanceText}></Text> */}
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#ff0080" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,
    padding: 16,
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 0,
    width: "100%",
  },
  balanceBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tokenIcon: {
    width: 36,
    height: 36,
  },
  balanceText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 400,
    fontFamily: "Joyride",
    // flex: 1,
    marginLeft: 9,
    // textAlign: "center",
  },
});

export default PaymentModeSwitch;
