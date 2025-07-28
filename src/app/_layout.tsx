import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Layout() {
  return <Slot screenOptions={{ headerTitleAlign: "center" }} />;
}
