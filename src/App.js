import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './component/views/Footer/Footer';
import LandingPage from './component/views/LandingPage/LandingPage';
import DetailPage from './component/views/DetailPage/DetailPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/movie-app" element={<LandingPage />} /> */}
          <Route exact path="/movie/:movieId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
