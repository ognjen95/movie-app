import React from 'react';

const ImgComponent = ({ src }) => {
  return (
    <div>
      <div className="imgCompDiv">
        <img className="imgComp" src={src} alt="slideImg" />
      </div>
      {/* <div className="imgTextInfo">
        <p>
          <strong>S02E05 : The Punisher</strong>
        </p>
        <button>Play Video</button> <button>More info</button>
      </div> */}
    </div>
  );
};

export default ImgComponent;
