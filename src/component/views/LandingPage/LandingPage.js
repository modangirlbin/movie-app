import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import GridCards from './Sections/GridCards';
import MainImage from './Sections/MainImage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../../scss/import.scss';

function LandingPage(){

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
    
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      //요래하면 20개가 계속 덮어 씌워짐
      // setMovies([...response.results]);
      setMovies([...Movies, ...response.results]);
      setMainMovieImage(response.results[0]);
      setCurrentPage(response.page);
    })
  }

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage+1}`;
    
    fetchMovies(endpoint);
  }

  return (
    <div className="main">
      <Header></Header>
      {/* MainMovieImage가져오기 전에 렌더링 되면 에러남 */}
      {MainMovieImage &&
        <MainImage 
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.title}
          desc={MainMovieImage.overview}
        />
      }
      <div className="main_cont">
        <h2 className="tit_cont">Movies by latest</h2>
        {/* 20개 하나하나 컨트롤할수 있도록 map */}
        <ul className="list_cards">
          {Movies && Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCards
                  image={movie.poster_path ?
                      `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                  movieId={movie.id}
                  movieName={movie.title}
                  movieVote={movie.vote_average}
              />
            </React.Fragment>
          ))
          }
        </ul>
        <div className='wrap_btn'>
          <button className="btn_more" onClick={loadMoreItems}> Load More</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage;