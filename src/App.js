import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";


export default function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch('movies.json')
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev => 
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    )
  };

  return (
    <div className="App">
      
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route 
              path='/' 
              element={
                <MoviesGrid 
                  watchlist={watchlist} 
                  movies={movies} 
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
            <Route 
              path='/watchlist' 
              element={
                <Watchlist 
                  watchlist={watchlist} 
                  movies={movies} 
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}
