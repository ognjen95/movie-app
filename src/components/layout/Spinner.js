import React from 'react';
import spinner from './Spiner.gif';

function Spinner() {
  return (
    <div
      style={{
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={spinner}
        alt="Loading...."
        style={{
          width: '100px',

          display: 'block',
        }}
      />
    </div>
  );
}
export default Spinner;
