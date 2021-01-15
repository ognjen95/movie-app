import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    // const onMouseEnter = (e) => {
    //   console.log(e.target.firstChild);
    //   const infoDiv = document.querySelector('.infoDiv');
    //   e.target.querrySelector('.infoDiv').style.visibility = 'visible';
    // };

    // const onMouseLeave = (e) => {
    //   const infoDiv = document.querySelector('.infoDiv');
    //   infoDiv.style.visibility = 'hidden';
    // };

    const style = {
      divAll: {
        // boxShadow: ' 7px 7px 5px 0px rgba(161,152,161,1)',
        // border: '1px solid gray',
        // borderRadius: '5px',
        marginBottom: '10px',
      },
      img: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      informDiv: {
        // transform: 'translateY(-120%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        // color: 'white',
        // visibility: 'hidden',
      },
    };

    return movie.Poster !== 'N/A' ? (
      <Grid style={style.divAll} item xs={12} sm={6} md={4} lrg={3}>
        <div
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          style={style.divAll}
        >
          <div style={style.img}>
            <Link
              style={{ textDecoration: 'none' }}
              to={'/movie/' + movie.imdbID}
            >
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
          </div>
          <div style={style.informDiv}>
            <h3 style={{ marginRight: '10px' }}>{movie.Title}</h3>
            <Link
              style={{ textDecoration: 'none' }}
              to={'/movie/' + movie.imdbID}
            >
              <InfoOutlinedIcon />
            </Link>
          </div>
        </div>
      </Grid>
    ) : null;
  }
}

export default MovieCard;
