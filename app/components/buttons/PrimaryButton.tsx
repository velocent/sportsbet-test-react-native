import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  text: string;
};
const PrimaryButton: React.FC<Props> = ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFE100",
    width: "100%",
    // padding: 16,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    // margin: 16,
  },
  text: {
    color: "#2D2606",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Joyride",
  },
});

export default PrimaryButton;
