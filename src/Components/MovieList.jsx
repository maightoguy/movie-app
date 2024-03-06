import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./styles.css";
/*
const trendingUrl = `${base_url}/trending/all/day?api_key=${api_key}`;
  const popularUrl = `${base_url}/movie/popular?api_key=${api_key}`;
  const seriesUrl = `${base_url}/tv/top_rated?api_key=${api_key}`;
*/
let api_key = "4913407cf8779743004ecf4de56a631e";
let base_url = "https://api.themoviedb.org/3";

const MovieList = ({ searchMov }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [seriesMovies, setSeriesMovies] = useState([]);

  const trendingUrl = `${base_url}/trending/all/day?api_key=${api_key}`;
  const popularUrl = `${base_url}/movie/popular?api_key=${api_key}`;
  const seriesUrl = `${base_url}/tv/top_rated?api_key=${api_key}`;

  // Combine search movies with trending/popular/series data
  const movies = searchMov?.results || []; // Use searchMov.results if available, else empty array

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingResponse = await axios.get(trendingUrl);
        setTrendingMovies(trendingResponse.data.results);

        const popularResponse = await axios.get(popularUrl);
        setPopularMovies(popularResponse.data.results);

        const seriesResponse = await axios.get(seriesUrl);
        setSeriesMovies(seriesResponse.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures one-time fetch

  return (
    <div>
      {movies && movies.length > 0 ? (
        <div className="category">
          <div className="category-head">
            <h2 className="category-title">Search Results</h2>
          </div>
          <div>
            <div className="grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="category">
        <div className="category-head">
          <h2 className="category-title trending">Whats trending</h2>
          <Link className="category-link" to="/Pages/Trending">
            View all
          </Link>
        </div>
        <div>
          <div className="grid">
            {trendingMovies &&
              trendingMovies.length > 0 &&
              trendingMovies
                .slice(0, 8)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-head">
          <h2 className="category-title popular">Whats popular</h2>
          <Link className="category-link" to="/Pages/Popular">
            View all
          </Link>
        </div>
        <div>
          <div className="grid">
            {popularMovies &&
              popularMovies.length > 0 &&
              popularMovies
                .slice(0, 8)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-head">
          <h2 className="category-title tv-series">Tv Series</h2>
          <Link className="category-link" to="/Pages/Series">
            View all
          </Link>
        </div>
        <div>
          <div className="grid">
            {seriesMovies &&
              seriesMovies.length > 0 &&
              seriesMovies
                .slice(0, 8)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
