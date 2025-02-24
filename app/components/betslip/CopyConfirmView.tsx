import { View } from "react-native";
import { Typography } from "../Typography";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const CopyConfirmView = ({
  onNo,
  onYes,
}: {
  onNo: () => void;
  onYes: () => void;
}) => {
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );

  return (
    <>
      <Typography style={{ marginBottom: 12 }}>
        Would you like to copy this bet for{" "}
        {selectedCurrency === "Cash" ? "Coin" : "Cash"}?
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <PrimaryButton
          style={{ flex: 1 }}
          text="NO"
          variant="secondary"
          onPress={onNo}
        />
        <PrimaryButton
          style={{ flex: 1 }}
          text="Yes"
          variant={selectedCurrency === "Cash" ? "coin" : "cash"}
          onPress={onYes}
        />
      </View>
    </>
  );
};

export default CopyConfirmView;
