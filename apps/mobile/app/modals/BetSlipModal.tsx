import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PrimaryButton from "../components/buttons/PrimaryButton";
import BaseModal from "./BaseModal";
import { Typography } from "../components/Typography";
import SinglesTab from "../components/betslip/SinglesTab";
import ParlayTab from "../components/betslip/ParlayTab";
import CopyConfirmView from "../components/betslip/CopyConfirmView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleCurrency } from "../store/currencySlice";

const Tab = createMaterialTopTabNavigator();

const BetSlipModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();

  const [showConfirm, setShowConfirm] = useState(false);

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );

  const handleClose = () => {
    setShowConfirm(false);
    onClose();
  };

  const handleCopyBet = () => {
    setShowConfirm(false);
    dispatch(toggleCurrency());
  };

  return (
    <BaseModal visible={visible} onClose={handleClose}>
      <Typography size={20} style={{ textAlign: "center" }}>
        BETSLIP (2)
      </Typography>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#1B1E23" },
          tabBarActiveTintColor: "#fff",
          tabBarIndicatorStyle: { backgroundColor: "#fff" },
          sceneStyle: { backgroundColor: "transparent" },
        }}
        style={{ minHeight: 400, height: "auto" }}
      >
        <Tab.Screen name="Singles" component={SinglesTab} />
        <Tab.Screen name="Parlay" component={ParlayTab} />
      </Tab.Navigator>

      <PrimaryButton text="confirm" onPress={() => setShowConfirm(true)} />

      <Typography style={{ textAlign: "center", opacity: 0.6, marginTop: 8 }}>
        Max bet amount: $10.000
      </Typography>

      {showConfirm && (
        <View style={{ padding: 16 }}>
          <CopyConfirmView onNo={handleClose} onYes={handleCopyBet} />
        </View>
      )}
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    // borderRadius: 10,
    // borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    // padding: 20,
    // bottom: 0,
    // position: "absolute",
    minHeight: "70%",
    height: "auto",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "red",
  },
  tabContent: {
    flex: 1,
    width: "100%",
    height: 300,
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#ff0044",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BetSlipModal;
