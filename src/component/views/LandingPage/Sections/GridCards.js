import React from 'react';

function GridCards(props) {
  return (
    <li>
      <a href={`/movie-app/#/${props.movieId}`} className='link_card'>
        <picture className='inner_card'>
          <source srcSet={props.smallImage} media='(max-width:500px)' alt={props.movieName} />
          <img src={props.image} className='thumb_card' alt={props.movieName} loading="lazy" />
        </picture>
        <span className='vote_card'><span className='offscreen'>평점</span>{props.movieVote}</span>
      </a>
    </li>
  );
}

export default GridCards; 