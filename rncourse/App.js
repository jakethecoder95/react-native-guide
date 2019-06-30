import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import PlacesInput from "./src/components/PlacesInput/PlacesInput";
import PlacesList from "./src/components/PlacesList/PlacesList";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  onPlaceNameChange = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput
          onPlaceNameChange={this.onPlaceNameChange}
          placeSubmitHandler={this.placeSubmitHandler}
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
