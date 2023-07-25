import React from 'react';

function GridCards(props) {
  return (
    <li className='item_card'>
      <a href={`/movie-app/#/${props.movieId}`}>
      {/* <a href="#none"> */}
        <span className='inner_card'>
          <picture>
            <source srcset={props.smallImage} media='(max-width:500px)' className='thumb_card' alt={props.movieName} />
            <img src={props.image} className='thumb_card' alt={props.movieName} />
          </picture>
          <span className='vote_card'><span className='offscreen'>평점</span>{props.movieVote}</span>
        </span>
      </a>
    </li>
  );
}

export default GridCards; 