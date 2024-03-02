import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Gallery } from './pages/Gallery';
import Headroom from 'react-headroom';

function App() {
  return (
    <div className="App">
      <Router>
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/galerija' element={<Gallery/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
