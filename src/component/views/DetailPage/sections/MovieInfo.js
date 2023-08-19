import React from 'react';

function MovieInfo(props) {
  return (
    <>
      <div className="sub_visual" style={{backgroundImage: `url(${props.backdrop})`}}></div>
      <article className='sub_contents'>
        <div className="area_summary">
          <div className="thumb_summary">
            <img className="img" src={props.image} alt={props.title} />
          </div>
          <div className="info_summary">
            <h2 className="tit">{props.title}</h2>
            <span className='tit_original'>{props.original_title}</span>
            <span>{props.overview}</span>
            <span className='date'>{props.release_date} 개봉</span>
            <span className='time'>{props.runtime}분</span>
            <span className='rate'>평점: {props.vote_average} / 투표수: {props.vote_count}</span>
          </div>
        </div>
        <div className='area_detail'>
          <strong className='copy_detail'>{props.tagline}</strong>
          <p className='story_detail'>{props.desc}</p>
        </div>
      </article>
    </>
  );
}

export default MovieInfo;