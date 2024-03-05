import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import "../Components/styles.css";

function Popular() {
  const [popularMov, setPopularMov] = useState();

  async function getPopularMov() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4913407cf8779743004ecf4de56a631e`
      );
      setPopularMov(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPopularMov(); // Fetch data for all categories on initial render
  }, []);

  return (
    <div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title popular">Whats Popular</h2>
        </div>
        <div>
          <div className="grid">
            {popularMov &&
              popularMov.length > 0 &&
              popularMov
                .slice(0, 20)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
