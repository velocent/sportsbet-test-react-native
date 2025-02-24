import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PaymentModeSwitch from "../components/PaymentModeSwitch";
import PrimaryButton from "../components/buttons/PrimaryButton";
import BetItemSingle from "../components/BetItemSingle";

const Tab = createMaterialTopTabNavigator();

const FirstTab = () => (
  // const changeAmount = (id:number) => () => {}
  <View style={styles.tabContent}>
    <ScrollView>
      <PaymentModeSwitch />
      <View style={{ padding: 16 }}>
        <BetItemSingle />
        <BetItemSingle />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {[50, 100, 200, 0].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                flex: 1,
                borderRadius: 4,
                padding: 12,
              }}
              activeOpacity={0.7}
              onPress={() => {}}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {item == 0 ? "Custom" : "$" + item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            marginBottom: 8,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 16, color: "#fff" }}>Total bet</Text>
          <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>
            $200
          </Text>
        </View>

        <View
          style={{
            marginBottom: 8,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 16, color: "#fff" }}>Potential win</Text>
          <Text style={{ fontSize: 16, color: "#15C249" }}>$360</Text>
        </View>

        <PrimaryButton text="CONFIRM BET" />
      </View>
    </ScrollView>

    {/* <FlatList
      style={{ padding: 16 }}
      data={[1, 2]}
      renderItem={() => <BetItemSingle />}
    /> */}

    {/* <View style={{ padding: 16 }}>
    </View> */}

    {/* <View style={{ padding: 16 }}>
      <BetItemSingle />
      <BetItemSingle />

      <PrimaryButton text="CONFIRM BET" />
    </View> */}
  </View>
);

const SecondTab = () => (
  <View style={styles.tabContent}>
    <PaymentModeSwitch />
    <Text style={styles.text}>Second Tab Content</Text>
  </View>
);

const BetModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>BETSLIP (2)</Text>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { backgroundColor: "#1e1efe" },
              tabBarActiveTintColor: "#fff",
              tabBarIndicatorStyle: { backgroundColor: "#fff" },
            }}
          >
            <Tab.Screen name="Singles" component={FirstTab} />
            <Tab.Screen name="Parlay" component={SecondTab} />
          </Tab.Navigator>
          {/* <PrimaryButton text="CONFIRM BET" /> */}
          {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
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

export default BetModal;
