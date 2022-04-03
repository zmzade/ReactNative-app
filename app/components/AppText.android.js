import React from "react";
import { Text, StyleSheet } from "react-native";
// with this component , we can same font style for all app.
const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
export default AppText;
