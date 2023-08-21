import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './component/views/Footer/Footer';
import LandingPage from './component/views/LandingPage/LandingPage';
import DetailPage from './component/views/DetailPage/DetailPage';
import ScrollToTop from './component/views/ScrollToTop';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/movie-app/" element={<DetailPage />} /> */}
          <Route path="/:movieId" element={<DetailPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
