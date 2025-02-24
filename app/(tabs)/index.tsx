import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import MatchCard from "../components/MathCard";
import { Ionicons } from "@expo/vector-icons";
import PaymentModeSwitch from "../components/PaymentModeSwitch";
import BetModal from "../modals/BetModal";
import { Typography } from "../components/Typography";
import PrimaryButton from "../components/buttons/PrimaryButton";

const sportsData = [
  {
    id: "1",
    team1: "Hornets",
    team2: "Kings",
    team1Logo: require("../../assets/images/team_avatar.png"),
    team2Logo: require("../../assets/images/team_avatar.png"),
    moneyline1: "-110",
    moneyline2: "+140",
    spread1: "-3.5 -110",
    spread2: "+3.5 -110",
    totalOver: "O 234.5 -110",
    totalUnder: "U 234.5 -110",
    endTime: "Ends at: 8:00 PM EST",
  },
  // Add more teams here...
];
// sportsData.push({ ...sportsData[0], id: "2" });
// sportsData.push({ ...sportsData[0], id: "3" });
// sportsData.push({ ...sportsData[0], id: "4" });

const sportsCategories = [
  {
    id: 1,
    name: "NBA",
    icon: require("../../assets/images/category/nba.png"),
  },
  {
    id: 2,
    name: "CBB (M)",
    icon: require("../../assets/images/category/cbb.png"),
  },
  {
    id: 3,
    name: "AUS OPEN (M)",
    icon: require("../../assets/images/category/aus.png"),
  },
  {
    id: 4,
    name: "CFB",
    icon: require("../../assets/images/category/cfb.png"),
  },
  {
    id: 5,
    name: "NHL",
    icon: require("../../assets/images/category/nhl.png"),
  },
  {
    id: 6,
    name: "CFB",
    icon: require("../../assets/images/category/cfb.png"),
  },
];

export default function SportsScreen() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const changeCategory = (categoryId: number) => () => {
    setSelectedCategory(categoryId);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography headerFont={true} size="md">
          SPORTS
        </Typography>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="wallet-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flexGrow: 1, paddingBottom: 60 }}>
        {/* Balance & Toggle Section */}
        <PaymentModeSwitch />

        {/* Search and Categories Section */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        <FlatList
          horizontal
          style={{ padding: 16 }}
          showsHorizontalScrollIndicator={false}
          data={sportsCategories}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <TouchableOpacity
                style={styles.categoryIconWrapper}
                onPress={changeCategory(item.id)}
              >
                <Image
                  source={item.icon}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* <Text style={styles.categoryText}>{item.name}</Text> */}
              <Typography size="sm" weight="medium">{item.name}</Typography>
            </View>
          )}
        />

        <View style={styles.matchCardWrapper}>
          <View style={styles.matchCardMeta}>
            <Typography size="xl">NBA</Typography>
            <Typography
              headerFont={true}
              size={10}
              style={{
                color: "#53470C",
                backgroundColor: "#FFE100",
                paddingVertical: 6,
                paddingHorizontal: 8,
                borderRadius: 4,
              }}
            >
              POPULAR
            </Typography>
          </View>
          {/* <FlatList
            // style={{ padding: 16 }}
            data={sportsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MatchCard item={item} />}
          /> */}
          <MatchCard item={sportsData[0]} />
          <MatchCard item={sportsData[0]} />
          <MatchCard item={sportsData[0]} />
        </View>
      </ScrollView>

      <View style={{ padding: 16 }}>
        <PrimaryButton
          text="Open Bet Slip (1)"
          onPress={showModal}
          // style={{ marginTop: 60 }}
        />
      </View>

      <BetModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,
    padding: 16,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:
    //   "linear-gradient(rgba(240, 46, 149, 1), rgba(240, 46, 149, 0))",
    // paddingHorizontal: 12,
    padding: 16,
    borderRadius: 0,
    // marginBottom: 16,
    // marginLeft: -1,
    // margin: 0,
  },
  balanceBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tokenIcon: {
    width: 30,
    height: 30,
  },
  balanceText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    // flex: 1,
    marginLeft: 5,
    // textAlign: "center",
  },
  searchContainer: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 8,
    // marginBottom: 12,
    margin: 16,
  },
  searchInput: {
    color: "#fff",
    fontSize: 16,
    padding: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 0,
    // paddingBottom: 0,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    // padding: 8,
    borderRadius: 8,
    marginLeft: 8,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
  },
  categoryIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryIcon: {
    width: 24,
    height: 24,
  },
  betSlipText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  matchCardWrapper: {
    backgroundColor: "#1e1e1e",
    // padding: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  matchCardMeta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
