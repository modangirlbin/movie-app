import React from 'react';
import '../../../../scss/import.scss';

function MainImage(props) {
  return (
    <div className="main_visual">
      <div className="box_visual">
        <h2 className="tit_visual">{props.title}</h2>
        <p className="desc_visual">{props.desc}</p>
      </div>
      <img src={props.image} className="img_visual" alt="poster"/>
    </div>
  )
}

export default MainImage;