import { createSlice } from "@reduxjs/toolkit";

export type CurrencyType = "Coin" | "Cash";

interface CurrencyState {
  selectedCurrency: CurrencyType;
}

const initialState: CurrencyState = {
  selectedCurrency: "Coin",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    toggleCurrency: (state) => {
      state.selectedCurrency =
        state.selectedCurrency === "Coin" ? "Cash" : "Coin";
    },
  },
});

export const { toggleCurrency } = currencySlice.actions;
export default currencySlice.reducer;
