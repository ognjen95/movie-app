import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMoviesGenre1,
  fetchMoviesGenre2,
  fetchMoviesGenre3,
} from '../../actions/searchActions';
import MovieHomeItem from './MovieHomeItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class MovieListGenres1 extends Component {
  componentDidMount() {
    this.props.fetchMoviesGenre1();
    this.props.fetchMoviesGenre2();
    this.props.fetchMoviesGenre3();
  }
  clickForNext = async (e) => {
    const movieItem1 = document.querySelectorAll(`#movieItem1`);
    const movieItem2 = document.querySelectorAll(`#movieItem2`);
    const movieItem3 = document.querySelectorAll(`#movieItem3`);
    const nextBtn = document.querySelector('.nextBtn');
    const num1 = movieItem1.length - 1;
    const num2 = movieItem2.length - 1;
    const num3 = movieItem3.length - 1;

    if (e.currentTarget.classList.contains('nextBtn1')) {
      console.log(movieItem1);
      if (this.state.value <= -250 * (num1 / 2)) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value: prevState.value - 600 };
        });

        movieItem1.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value}px)`)
        );
      }
    } else if (e.currentTarget.classList.contains('nextBtn2')) {
      if (this.state.value1 <= -250 * (num2 / 2)) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value1: prevState.value1 - 600 };
        });

        movieItem2.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value1}px)`)
        );
      }
    } else {
      if (this.state.value2 <= -250 * (num3 / 2)) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value2: prevState.value2 - 600 };
        });

        movieItem3.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value2}px)`)
        );
      }
    }
  };

  clickForPrev = async (e) => {
    const movieItem1 = document.querySelectorAll(`#movieItem1`);
    const movieItem2 = document.querySelectorAll(`#movieItem2`);
    const movieItem3 = document.querySelectorAll(`#movieItem3`);

    if (e.currentTarget.classList.contains('prevBtn1')) {
      console.log('test');
      if (this.state.value === 0) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value: prevState.value + 600 };
        }, console.log(e.currentTarget));

        movieItem1.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value}px)`)
        );
      }
    } else if (e.currentTarget.classList.contains('prevBtn2')) {
      if (this.state.value1 === 0) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value1: prevState.value1 + 600 };
        }, console.log(e.currentTarget, this.state.value1));

        movieItem2.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value1}px)`)
        );
      }
    } else {
      if (this.state.value2 === 0) {
        e.currentTarget.disabled = true;
      } else {
        await this.setState((prevState) => {
          return { value2: prevState.value2 + 600 };
        }, console.log(e.currentTarget, this.state.value1));

        movieItem3.forEach(
          (movie) =>
            (movie.style.transform = `translateX(${this.state.value2}px)`)
        );
      }
    }
  };

  state = {
    value: 0,
    value1: 0,
    value2: 0,
  };

  render() {
    const { genre1, genre2, genre3 } = this.props;
    const genre1Movies = genre1.map((movie, id) => (
      <MovieHomeItem idName={'movieItem1'} movie={movie} key={id} />
    ));
    const genre2Movies = genre2.map((movie, id) => (
      <MovieHomeItem movie={movie} key={id} idName={'movieItem2'} />
    ));
    const genre3Movies = genre3.map((movie, id) => (
      <MovieHomeItem movie={movie} key={id} idName={'movieItem3'} />
    ));
    return (
      <div style={{ marginTop: '25px' }}>
        <div>
          <div>
            <h3 style={{ margin: '10px 0 5px 5px' }}>Action</h3>
          </div>
          <div className="movieListDiv">
            <div className="movieList"> {genre1Movies} </div>;
            <div>
              <button
                onClick={this.clickForPrev}
                className="nextPrev prevBtn prevBtn1 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
              <button
                onClick={this.clickForNext}
                className="nextPrev nextBtn nextBtn1 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 style={{ margin: '10px 0 5px 5px' }}>Horror</h3>
          </div>
          <div className="movieListDiv">
            <div className="movieList"> {genre2Movies} </div>;
            <div>
              <button
                onClick={this.clickForPrev}
                className="nextPrev prevBtn prevBtn2 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
              <button
                onClick={this.clickForNext}
                className="nextPrev nextBtn nextBtn2 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 style={{ margin: '10px 0 5px 5px' }}>Thriller</h3>
          </div>
          <div className="movieListDiv">
            <div className="movieList"> {genre3Movies} </div>;
            <div>
              <button
                onClick={this.clickForPrev}
                className="nextPrev prevBtn prevBtn3 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
              <button
                onClick={this.clickForNext}
                className="nextPrev nextBtn nextBtn3 "
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  genre1: state.movies.genre1,
  genre2: state.movies.genre2,
  genre3: state.movies.genre3,
});

export default connect(mapStateToProps, {
  fetchMoviesGenre3,
  fetchMoviesGenre2,
  fetchMoviesGenre1,
})(MovieListGenres1);
