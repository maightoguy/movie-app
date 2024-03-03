import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./styles.css";

//'https://api.themoviedb.org/3/movie/popular?api_key=REACT_APP_API_KEY'
//'https://api.themoviedb.org/3/trending/person/day?api_key=REACT_APP_API_KEY'
//'https://api.themoviedb.org/3/genre/tv/list?api_key=REACT_APP_API_KEY'

const MovieList = () => {
  return (
    <div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title trending">Whats trending</h2>
          <a className="category-link" href="/trending">
            View all
          </a>
        </div>
        <div>
          <div className="grid">
            <MovieCard />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title popular">Whats popular</h2>
          <a className="category-link" href="/popular">
            View all
          </a>
        </div>
        <div>
          <div className="grid">
            <MovieCard />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title Tv-series">Tv Series</h2>
          <Link className="category-link" to="/Components/movie">
            View all
          </Link>
        </div>
        <div>
          <div className="grid">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
