import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import DetailImage from './sections/DetailImage';
import MovieInfo from './sections/MovieInfo';
import HeaderSub from '../Header/HeaderSub';
import '../../../scss/detail.scss';


function DetailPage(props) {

  let {movieId} = useParams();
  const [Movie, setMovie] = useState([]);

  useEffect(() => {

    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko&page=1`

    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovie(response);
      })
  }, []);

  return (
    <>
      <HeaderSub title={Movie.title} />
      <div className='sub'>
        <DetailImage 
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          backdrop={`${IMAGE_BASE_URL}original${Movie.backdrop_path}`}
          title={Movie.title}
          original_title={Movie.original_title}
          desc={Movie.overview}
          release_date={Movie.release_date}
          tagline={Movie.tagline}
          genres={Movie.genres}
          vote_average={Movie.vote_average}
          vote_count={Movie.vote_count}
          runtime={Movie.runtime}
        />
        <MovieInfo 
          desc={Movie.overview}
          release_date={Movie.release_date}
          tagline={Movie.tagline}
          genres={Movie.genres}
          vote_average={Movie.vote_average}
          vote_count={Movie.vote_count}
          runtime={Movie.runtime}
        />
        <div style={{width: '85%', margin: '1rem auto'}}>
          
        </div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
          {/* <button> Toggle Actor View</button> */}
        </div>
      </div>
    </>
  );
}

export default DetailPage;