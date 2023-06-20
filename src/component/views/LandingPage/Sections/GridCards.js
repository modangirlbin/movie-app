import React from 'react';
import '../../../../scss/import.scss';

function GridCards(props) {
  return (
    <li className='item_card'>
      <a href={`/movie/${props.movieId}`}>
      {/* <a href="#none"> */}
        <span className='inner_card'>
          <img src={props.image} className='thumb_card' alt={props.movieName} />
          <span className='vote_card'><span className='offscreen'>평점</span>{props.movieVote}</span>
        </span>
      </a>
    </li>
  );
}

export default GridCards; 