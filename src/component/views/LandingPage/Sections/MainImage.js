import React from 'react';
import '../../../../scss/import.scss';

function MainImage(props) {
  return (
    <div className="main_visual">
      <span className="img_visual">
        <img className="img" src={props.image} alt={props.title} />
        {/* <img src={props.image} alt="poster"/> */}
      </span>
      <div className="info_visual">
        <h2 className="tit_visual">{props.title}</h2>
        <p className="desc_visual">{props.desc}</p>
      </div>
    </div>
  )
}

export default MainImage;