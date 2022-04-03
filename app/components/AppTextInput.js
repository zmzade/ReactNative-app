import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,

    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
