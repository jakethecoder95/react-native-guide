import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlacesInput from "./src/components/PlacesInput/PlacesInput";
import PlacesList from "./src/components/PlacesList/PlacesList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions";

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlacesInput onPlaceAdded={this.placeAddedHandler} />
        <PlacesList
          places={this.props.places}
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

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: name => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: key => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
