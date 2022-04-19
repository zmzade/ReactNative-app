import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        preview={{ uri: listing.images[0].thumbnailUrl }}
        style={styles.image}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listing.title} </Text>
        <Text style={styles.subTitle}>${listing.price} </Text>
      </View>
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
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
