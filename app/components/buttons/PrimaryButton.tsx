import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Typography } from "../Typography";

type PrimaryButtonProps = {
  text: string;
  style?: ViewStyle;
  onPress?: () => void;
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  style,
  onPress,
  ...props
}: PrimaryButtonProps) => {
  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      onPress={handlePress}
      {...props}
    >
      <Typography style={styles.text}>{text}</Typography>
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
