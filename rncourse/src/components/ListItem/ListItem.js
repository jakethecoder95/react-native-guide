import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from "react-native";

const ListItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
