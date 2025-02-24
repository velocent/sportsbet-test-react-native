import { ScrollView, TouchableOpacity, View } from "react-native";
import { Typography } from "../Typography";
import CurrencyToggle from "../CurrencyToggle";
import BetItem from "../BetItemSingle";
import { useState } from "react";

const SinglesTab = () => {
  const [amounts, setAmounts] = useState([0, 0]);

  return (
    <ScrollView>
      <CurrencyToggle />

      <View style={{ padding: 16 }}>
        {amounts.map((v, i) => (
          <BetItem key={i} amount={v} />
        ))}

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
              <Typography style={{ color: "#fff", textAlign: "center" }}>
                {item == 0 ? "Custom" : "$" + item}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default SinglesTab;
