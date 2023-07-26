import React from 'react';

function MovieInfo(props) {
  return (
    <>
      <div className="sub_visual" style={{backgroundImage: `url(${props.backdrop})`}}></div>
      <article className='sub_cont'>
        <div className="area_poster">
          <div className="thumb_sub">
            <img className="thumb_img" src={props.image} alt={props.title} />
          </div>
          <div className="info_visual">
            <h2 className="tit_thumb">{props.title}</h2>
            <span className='tit_original'>{props.original_title}</span>
            <span>{props.overview}</span>
            <span className='date'>{props.release_date} 개봉</span>
            <span>{props.runtime}분</span>
            <span>평점: {props.vote_average} / 투표수: {props.vote_count}</span>
          </div>
        </div>
        <strong className='copy'>{props.tagline}</strong>
        <p className='overview'>{props.desc}</p>
      </article>
    </>
  );
}

export default MovieInfo;