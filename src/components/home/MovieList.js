import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import NoMovie from './NoMovie';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    let content;

    content =
      movies.Response === 'True' ? (
        movies.Search.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))
      ) : (
        <NoMovie />
      );

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>Movie results:</h1>
        <Grid container direction="row" alignItems="stretch" justify="center">
          {content}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps)(MovieList);
