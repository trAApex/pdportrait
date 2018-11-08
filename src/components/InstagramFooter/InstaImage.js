import React from 'react';

import './InstaImage.css';

const InstaImage = props => {
  return (
    <div className="image">
      <a href={props.link} target="_blank">
        <img src={props.image} alt="yepa" />
      </a>
    </div>
  );
}

export default InstaImage;