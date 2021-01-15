import React from 'react';
import { Link } from 'react-router-dom';

const MovieHomeItem = ({ movie, idName }) => {
  return (
    <div
      style={{ border: '2px solid white' }}
      id={idName}
      className="movieItemAll"
    >
      <Link to={'/movie/' + movie.imdbID}>
        <img className="movieImg" src={movie.Poster} alt={movie.Title} />
      </Link>
    </div>
  );
};

export default MovieHomeItem;
