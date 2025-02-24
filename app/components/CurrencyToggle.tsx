import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Switch, View } from "react-native";
import { Typography } from "./Typography";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleCurrency } from "../store/currencySlice";

const iconCoin = require("../../assets/images/coin.png");
const iconCash = require("../../assets/images/cash.png");

const CurrencyToggle: React.FC = () => {
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
          colors={["rgba(240, 46, 149, 0.2)", "rgba(240, 46, 149, 0)"]}
          style={styles.balanceBackground}
        />
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["rgba(21, 197, 74, 0.1)", "rgba(21, 197, 74, 0.025)"]}
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
          {isCash ? "$12,927.00" : "12,000,000"}
        </Typography>
      </View>
      <Switch
        trackColor={{ true: "#15C54A", false: "#F02E95" }}
        thumbColor={"#fff"}
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
    marginRight: 8,
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

export default CurrencyToggle;
