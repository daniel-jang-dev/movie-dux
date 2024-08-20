import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="search-bar">
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {
          watchlist.map(movieId => {
            const movie = movies.find(m => m.id === movieId);
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                isWatchlisted={true} 
                toggleWatchlist={toggleWatchlist}
              />
            )
          })
        }
      </div>
    </div>
  );
}