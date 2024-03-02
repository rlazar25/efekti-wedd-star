import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
