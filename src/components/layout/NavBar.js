import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const styles = {
      navStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 30px',
      },
    };
    return (
      <span>
        <Paper elevation={6} variant="outlined" square>
          <div style={styles.navStyle}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <div className="logoDiv">
                <TheatersIcon fontSize="large" />
              </div>
            </Link>
            <div className="searchDiv">
              <SearchForm />
            </div>
          </div>
        </Paper>
      </span>
    );
  }
}

export default NavBar;
