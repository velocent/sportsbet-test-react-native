import { StyleSheet, View } from "react-native";
import { Typography } from "../components/Typography";

export default function FeaturedScreen() {
  return (
    <View style={styles.container}>
      <Typography>Featured screen</Typography>
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
