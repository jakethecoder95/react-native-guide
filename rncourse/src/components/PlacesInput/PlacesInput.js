import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlacesInput = props => {
  const [placeName, setPlaceName] = useState("");

  const placeSubmitHandler = val => {
    if (val === "") {
      return;
    }

    props.onPlaceAdded(val);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An Awesome Place"
        onChangeText={val => setPlaceName(val)}
        value={placeName}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={() => placeSubmitHandler(placeName)}
      />
    </View>
  );
};

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
