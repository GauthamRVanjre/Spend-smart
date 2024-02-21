import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { GuestWelcomeScreen } from "./screens/GuestWelcomeScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GuestWelcome"
        component={GuestWelcomeScreen}
        options={{ title: "Welcome" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
