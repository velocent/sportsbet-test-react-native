import { Text, TextProps, StyleSheet, TextStyle } from "react-native";

type TypographyProps = TextProps & {
  style?: TextStyle;
  weight?: "regular" | "medium" | "semibold" | "bold";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | number;
  headerFont?: boolean;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  size = "md",
  weight = "regular",
  headerFont = false,
  style,
  children,
  ...props
}: TypographyProps) => {
  const fontSizeMap = {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 32,
  };

  const fontWeightMap = {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  };

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: typeof size === "number" ? size : fontSizeMap[size],
          fontFamily: headerFont ? "Joyride" : fontWeightMap[weight],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff", // Default color
  },
});
