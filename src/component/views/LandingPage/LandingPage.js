import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import GridCards from './Sections/GridCards';
import MainImage from './Sections/MainImage';
import Header from '../Header/Header';
import BottomNav from '../BottomNav';

function LandingPage(){

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  // const {mvnumber} = useParams();
  // console.log(mvnumber);

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
      setMainMovieImage(response.results[9]);
      // 메인이미지 미니언즈 고정
      // setMainMovieImage(response.results.find(obj =>{
      //   return obj.id === 438148;
      // }));
      setCurrentPage(response.page);
    })
  }

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage+1}`;
    
    fetchMovies(endpoint);
  }

  return (
    <>
      <Header />
      <main className="main">
        {/* MainMovieImage가져오기 전에 렌더링 되면 에러남 */}
        <section className="section_visual">
          {MainMovieImage &&
            <MainImage 
              image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
              title={MainMovieImage.title}
              desc={MainMovieImage.overview}
            />
          }
        </section>
        <section className="section_cont">
          <h2 className="tit_cont"># 상영예정작</h2>
          {/* 20개 하나하나 컨트롤할수 있도록 map */}
          <ul className="list_cards">
            {Movies && Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                    image={movie.poster_path ?
                        `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                    smallImage={movie.poster_path ?
                          `${IMAGE_BASE_URL}w300${movie.poster_path}` : null}
                    movieId={movie.id}
                    movieName={movie.title}
                    movieVote={movie.vote_average}
                />
              </React.Fragment>
            ))
            }
          </ul>
          <div className='box_btn'>
            <button className="btn_more" onClick={loadMoreItems}> Load More</button>
          </div>
        </section>
        <BottomNav />
      </main>
    </>
  )
}

export default LandingPage;