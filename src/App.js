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
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/movie-app/" element={<DetailPage />} /> */}
          <Route path="/:movieId" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
