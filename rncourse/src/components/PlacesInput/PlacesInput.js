import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlacesInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An Awesome Place"
      onChange={val => props.onPlaceNameChange(val)}
      value={props.placeName}
    />
    <Button
      title="Add"
      style={styles.placeButton}
      onPush={props.placesSubmitHandler}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlacesInput;
