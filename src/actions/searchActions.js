import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIEGENRE1,
  FETCH_MOVIEGENRE2,
  FETCH_MOVIEGENRE3,
} from './types';

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  fetch(`http://www.omdbapi.com/?s=${text}&apikey=a054fd6a`)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  fetch(`http://www.omdbapi.com/?i=${id}&apikey=a054fd6a`)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};
export const fetchMoviesGenre1 = () => (dispatch) => {
  fetch(`http://www.omdbapi.com/?s=avengers&apikey=a054fd6a`)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_MOVIEGENRE1,
        payload: res.Search,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMoviesGenre2 = () => (dispatch) => {
  fetch(`http://www.omdbapi.com/?s=horror&apikey=a054fd6a`)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_MOVIEGENRE2,
        payload: res.Search,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMoviesGenre3 = () => (dispatch) => {
  fetch(`http://www.omdbapi.com/?s=thriller&apikey=a054fd6a`)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_MOVIEGENRE3,
        payload: res.Search,
      })
    )
    .catch((err) => console.log(err));
};
