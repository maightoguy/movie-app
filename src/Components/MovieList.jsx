import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./styles.css";

let api_key = "4913407cf8779743004ecf4de56a631e";
let base_url = "https://api.themoviedb.org/3";

const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [seriesMovies, setSeriesMovies] = useState([]);

  const trendingUrl = `${base_url}/trending/all/day?api_key=${api_key}`;
  const popularUrl = `${base_url}/movie/popular?api_key=${api_key}`;
  const seriesUrl = `${base_url}/tv/top_rated?api_key=${api_key}`;

  async function getTrendingMovies() {
    try {
      const { data } = await axios.get(trendingUrl);
      setTrendingMovies(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }

  async function getPopularMovies() {
    try {
      const { data } = await axios.get(popularUrl);
      setPopularMovies(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }

  async function getSeriesMovies() {
    try {
      const { data } = await axios.get(seriesUrl);
      setSeriesMovies(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTrendingMovies();
    getPopularMovies();
    getSeriesMovies(); // Fetch data for all categories on initial render
  }, []); // Empty dependency array ensures one-time fetch

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
            {trendingMovies &&
              trendingMovies.length > 0 &&
              trendingMovies
                .slice(0, 4)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
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
            {popularMovies &&
              popularMovies.length > 0 &&
              popularMovies
                .slice(0, 4)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-head">
          <h2 className="category-title tv-series">Tv Series</h2>
          <Link className="category-link" to="/Components/movie">
            View all
          </Link>
        </div>
        <div>
          <div className="grid">
            {seriesMovies &&
              seriesMovies.length > 0 &&
              seriesMovies
                .slice(0, 4)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
