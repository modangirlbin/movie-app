import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import MovieInfo from './sections/MovieInfo';
import HeaderSub from '../Header/HeaderSub';


function DetailPage(props) {

  let {movieId} = useParams();
  const [Movie, setMovie] = useState([]);

  useEffect(() => {

    // let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
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
      <main className='sub'>
        <MovieInfo 
          image={`${IMAGE_BASE_URL}w720${Movie.poster_path}`}
          backdrop={`${IMAGE_BASE_URL}original${Movie.backdrop_path}`}
          title={Movie.title}
          desc={Movie.overview}
          release_date={Movie.release_date}
          tagline={Movie.tagline}
          // genres={Movie.genres}
          vote_average={Movie.vote_average}
          vote_count={Movie.vote_count}
          runtime={Movie.runtime}
        />
      </main>
    </>
  );
}

export default DetailPage;