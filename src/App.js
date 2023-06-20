import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './component/views/Footer/Footer';
import LandingPage from './component/views/LandingPage/LandingPage';
import DetailPage from './component/views/DetailPage/DetailPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/movie-app" element={<LandingPage />} />
          <Route exact path="/movie/:movieId" element={<DetailPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
