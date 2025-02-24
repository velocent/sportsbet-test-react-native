import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BetItemSingle: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "#555",
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
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "#fff",
                marginBottom: 12,
								fontFamily:'Inter'
              }}
            >
              Warrios vs Bucks
            </Text>
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
              <Text style={{ fontWeight: 700, fontSize: 16, color: "#fff",fontFamily:'Inter' }}>
                Warriors -3.5
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: "rgba(255,255,255,0.8)",fontFamily:'Inter' }}>
              End at: 8:00 PM EST
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              fontWeight: 500,
              color: "#fff",
            }}
          >
            -120
          </Text>
          <View
            style={{
              backgroundColor: "#444",
              borderRadius: 4,
              paddingVertical: 4,
              paddingHorizontal: 12,
              minWidth: 100,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textAlign: "right",
              }}
            >
              $100
            </Text>
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
