import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/searchActions';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;
    return (
      <Container>
        <div>
          <Grid
            style={{ marginTop: '5%' }}
            justify="center"
            alignItems="center"
            container
          >
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <img style={{ height: '100%' }} src={movie.Poster} alt="" />
            </Grid>
            <Grid item md={5}>
              <h1> {movie.Title}</h1>
              <p>
                <strong>Genre:</strong> {movie.Genre}{' '}
              </p>
              <p>
                <strong>Released:</strong> {movie.Released}{' '}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.Runtime}
              </p>
              <p>
                <strong>IMDB:</strong> {movie.imdbRating}
              </p>
              <p>
                <strong>Director: </strong>
                {movie.Director}
              </p>
              <p>
                <strong>Production:</strong> {movie.Production}
              </p>
              <p>
                <strong>Actors: </strong>
                {movie.Actors}
              </p>
              <p>
                <strong>Awards:</strong> {movie.Awards}
              </p>
            </Grid>
            <Grid item md={1}></Grid>

            <Grid md={10}>
              <div
                style={{
                  // backgroundColor: '#f2f2f2',
                  border: ' 1px solid black',
                  padding: '20px',
                  margin: '30px 0 30px 0',
                  fontSize: '1.1rem',
                }}
              >
                <p>
                  <strong>About Movie: </strong>
                  {movie.Plot}
                </p>
                <a
                  style={{ textDecoration: 'none' }}
                  target="blank"
                  href={'https://www.imdb.com/title/' + movie.imdbID}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: '15px' }}
                  >
                    View trailer on IMDB
                  </Button>
                </a>
                <Link style={{ textDecoration: 'none' }} to="/">
                  <Button>Back to Home</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie })(Movie);
