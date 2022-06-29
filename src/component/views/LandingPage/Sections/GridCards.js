import React from 'react';
import '../../../../scss/import.scss';

function GridCards(props) {
  return (
    <li className='item_card'>
      <a href={`/movie/${props.movieId}`}>
        <span className='inner_card'>
          <img src={props.image} className='thumb_card' alt={props.movieName} />
          <span className='vote_card'>{props.movieVote}</span>
        </span>
      </a>
    </li>
  );
}

export default GridCards; 