import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";
// with this component , we can same font style for all app.
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
