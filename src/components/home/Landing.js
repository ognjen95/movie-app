import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from './Slider';
import MovieListGenres1 from './MovieListGenres1';

class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <Slider />
        <MovieListGenres1 />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(Landing);
