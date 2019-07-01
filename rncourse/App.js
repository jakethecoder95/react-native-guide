import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlacesInput from "./src/components/PlacesInput/PlacesInput";
import PlacesList from "./src/components/PlacesList/PlacesList";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = val => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(val)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput
          onPlaceNameChange={this.onPlaceNameChange}
          onPlaceAdded={this.placeAddedHandler}
          placeName={this.state.placeName}
        />
        <PlacesList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
