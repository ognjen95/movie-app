import React, { Component } from 'react';

class NoMovie extends Component {
  render() {
    return (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          padding: '20pxgit',
        }}
      >
        <h1>There is no movie with that title mate ;)</h1>
      </div>
    );
  }
}
export default NoMovie;
