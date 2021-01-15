import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#303F9F',
          marginTop: '20px',
        }}
      >
        <p style={{ color: 'white' }}>
          Designed and developed by Me :) 2020 API from
          <a
            href="http://www.omdbapi.com/"
            target="blank"
            style={{
              marginLeft: '5px',

              color: 'white',
            }}
          >
            OMDb API
          </a>
        </p>
      </div>
    );
  }
}
export default Footer;
