import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export const GuestWelcomeScreen = () => {
  //   const handlePressOnSignIn = () => {
  //     navigation.navigate("SignIn");
  //   };

  //   const handlePressOnSignUp = () => {
  //     navigation.navigate("SignUp");
  //   };

  return (
    <View style={styles.container}>
      <Text>Guest Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
