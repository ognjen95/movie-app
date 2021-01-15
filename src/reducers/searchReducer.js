import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIEGENRE1,
  FETCH_MOVIEGENRE2,
  FETCH_MOVIEGENRE3,
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: true,
  movie: [],
  genre1: [],
  genre2: [],
  genre3: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case FETCH_MOVIEGENRE1:
      return {
        ...state,
        genre1: action.payload,
      };
    case FETCH_MOVIEGENRE2:
      return {
        ...state,
        genre2: action.payload,
      };
    case FETCH_MOVIEGENRE3:
      return {
        ...state,
        genre3: action.payload,
      };
    default:
      return state;
  }
}
