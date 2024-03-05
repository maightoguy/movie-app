import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import "../Components/styles.css";

function Trending() {
  const [trendingMov, setTrendingMov] = useState();

  async function getTrendingMov() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=4913407cf8779743004ecf4de56a631e`
      );
      setTrendingMov(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTrendingMov(); // Fetch data for all categories on initial render
  }, []);

  return (
    <div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title trending">Whats Trending</h2>
        </div>
        <div>
          <div className="grid">
            {trendingMov &&
              trendingMov.length > 0 &&
              trendingMov
                .slice(0, 20)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
