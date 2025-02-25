import React, { useMemo, useState } from "react";
import { View } from "react-native";
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
import { placeBet } from "../graphql/mutations/placeBetMutation";
import { getUserBets } from "../graphql/queries/getUserBetsQuery";
import { Ionicons } from "@expo/vector-icons";

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
  const [confirmState, setConfirmState] = useState<0 | 1 | 2>(0); // normal | confirming | confirmed
  const isLoading = useMemo(() => confirmState == 1, [confirmState]);
  const isDisabled = useMemo(() => confirmState == 1, [confirmState]);
  const isConfirmed = useMemo(() => confirmState == 2, [confirmState]);
  const confirmButtonText = ["confirm", "confirming", "confirmed"];

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );

  const handleClose = () => {
    setShowConfirm(false);
    setConfirmState(0);
    onClose();
  };

  const handleCopyBet = () => {
    setShowConfirm(false);
    setConfirmState(0);
    dispatch(toggleCurrency());
  };

  const handleConfirm = async () => {
    setConfirmState(1);

    const userId = "999";
    const outcomes = "outcome";
    const wagerAmount = 100;

    console.log(process.env.EXPO_PUBLIC_GRAPHQL_URL)

    placeBet(
      userId,
      outcomes,
      wagerAmount,
      selectedCurrency,
      () => {
        console.log("completed placebet");
        setConfirmState(2);
        setShowConfirm(true);
      },
      (e) => {
        console.log("error on placebet", e);
        setConfirmState(0);
      }
    );

    // getUserBets(userId).then((v) => console.log(v));
  };

  return (
    <BaseModal visible={visible} onClose={handleClose}>
      <Typography size={20} headerFont style={{ textAlign: "center" }}>
        betslip (2)
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

      <View style={{ paddingHorizontal: 16 }}>
        <PrimaryButton
          text={confirmButtonText[confirmState]}
          onPress={handleConfirm}
          loading={isLoading}
          disabled={isDisabled}
          icon={isConfirmed && <Ionicons name="checkmark-sharp" size={16} />}
        />
      </View>

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

export default BetSlipModal;
