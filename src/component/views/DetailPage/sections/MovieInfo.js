import React from 'react';


function MovieInfo(props) {
  return (
    <div className='sub_cont'>
      <strong className='copy'>{props.tagline}</strong>
      <p className='overview'>{props.desc}</p>
    </div>
  );
}

export default MovieInfo;