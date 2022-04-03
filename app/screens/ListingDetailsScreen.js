import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} />
      <View style={styles.userContainer}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="5 Listing"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
