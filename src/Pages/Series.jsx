import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import "../Components/styles.css";

function Series() {
  const [seriesMov, setSeriesMov] = useState();

  async function getSeriesMov() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=4913407cf8779743004ecf4de56a631e`
      );
      setSeriesMov(data.results); // Assuming 'results' is the key for movies
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSeriesMov(); // Fetch data for all categories on initial render
  }, []);

  return (
    <div>
      <div className="category">
        <div className="category-head">
          <h2 className="category-title series">TV Series</h2>
        </div>
        <div>
          <div className="grid">
            {seriesMov &&
              seriesMov.length > 0 &&
              seriesMov
                .slice(0, 20)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
