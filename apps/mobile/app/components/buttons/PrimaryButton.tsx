import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { Typography } from "../Typography";

type PrimaryButtonProps = {
  text: string;
  style?: ViewStyle;
  variant?: "brand" | "coin" | "cash" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onPress?: () => void;
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  style,
  onPress,
  variant = "brand",
  disabled = false,
  loading = false,
  icon,
  ...props
}: PrimaryButtonProps) => {
  const handlePress = () => {
    onPress && onPress();
  };

  const getButtonBg = () => {
    switch (variant) {
      case "brand":
        return styles.buttonBgBrand;
      case "coin":
        return styles.buttonBgCoin;
      case "cash":
        return styles.buttonBgCash;
      case "secondary":
        return styles.buttonBgSecondary;
      default:
        return styles.buttonBgBrand;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "brand":
        return styles.textBrand;
      case "coin":
        return styles.textCoin;
      case "cash":
        return styles.textCash;
      default:
        return styles.textCoin;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        getButtonBg(),
        { opacity: disabled ? 0.4 : 1 },
      ]}
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={disabled}
      {...props}
    >
      {loading && <ActivityIndicator color={"#000"} />}
      {icon}
      <Typography style={{ ...styles.text, ...getTextColor() }}>
        {text}
      </Typography>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    // margin: 16,
  },
  buttonBgBrand: {
    backgroundColor: "#FFE100",
  },
  buttonBgCoin: {
    backgroundColor: "#F02E95",
  },
  buttonBgCash: {
    backgroundColor: "#15C54A",
  },
  buttonBgSecondary: {
    backgroundColor: "#282A2E",
  },
  text: {
    color: "#2D2606",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Joyride",
  },
  textBrand: {
    color: "#2D2606",
  },
  textCash: {
    color: "#FFF",
  },
  textCoin: {
    color: "#FFF",
  },
});

export default PrimaryButton;
