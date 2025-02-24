import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { store } from "./store/store";

export default function RootLayout() {
  useFonts({
    Joyride: require("../assets/fonts/Joyride-Regular.otf"),
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}
