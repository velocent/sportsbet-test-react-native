import { View, StyleSheet } from "react-native";
import { Typography } from "../components/Typography";

export default function MyBetsScreen() {
  return (
    <View style={styles.container}>
      <Typography>MyBets screen</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
});
