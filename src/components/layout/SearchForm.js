import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class SearchForm extends Component {
  state = {
    submited: false,
  };
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    // this.props.history.push('/movies');    MOZE I OVAKO SAMO DODATI NA KRAJU WithRouter(SearchForm) !!!!!
    this.setState({ submited: true }, () => this.setState({ submited: false }));
  };

  render() {
    if (this.state.submited) {
      // eslint-disable-next-line no-unused-expressions
      return <Redirect to="/movies" />;
    }

    return (
      <span>
        <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <div
            style={{
              display: 'flex',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search movies ..."
              variant="outlined"
              onChange={this.onChange}
              size="small"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginLeft: '10px',
              }}
            >
              <SearchOutlinedIcon />
            </Button>
          </div>
        </form>
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(
  SearchForm
);
// export default SearchForm;
