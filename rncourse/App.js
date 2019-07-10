import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlacesInput from "./src/components/PlacesInput/PlacesInput";
import PlacesList from "./src/components/PlacesList/PlacesList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          name: placeName,
          key: Math.random(),
          image: {
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv3GfBcaDc8KqikLXpQDqogA08n_P8XyE2739F6pYAKGf_1D9"
          }
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(
          place => place.key !== prevState.selectedPlace.key
        ),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlacesInput
          onPlaceNameChange={this.onPlaceNameChange}
          onPlaceAdded={this.placeAddedHandler}
          placeName={this.state.placeName}
        />
        <PlacesList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
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
