import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const ListItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});

export default ListItem;
