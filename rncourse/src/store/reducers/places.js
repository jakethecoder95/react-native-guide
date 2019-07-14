import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          name: action.placeName,
          key: Math.random().toString(),
          image: {
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv3GfBcaDc8KqikLXpQDqogA08n_P8XyE2739F6pYAKGf_1D9"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key
        ),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.placeKey)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
