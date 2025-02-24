import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Switch, View } from "react-native";
import { Typography } from "./Typography";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleCurrency } from "../store/currencySlice";

const iconCoin = require("../../assets/images/coin.png");
const iconCash = require("../../assets/images/cash.png");

const PaymentModeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );
  const isCash = selectedCurrency == "Cash";

  const toggleSwitch = () => {
    dispatch(toggleCurrency());
  };

  return (
    <View style={styles.balanceContainer}>
      {!isCash ? (
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
        <Image source={isCash ? iconCash : iconCoin} style={styles.tokenIcon} />
        <Typography headerFont size="xl">
          12,000,000
        </Typography>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#ff0080" }}
        thumbColor={isCash ? "#fff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isCash}
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
