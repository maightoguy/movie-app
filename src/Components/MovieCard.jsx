import React from "react";
import "./styles.css";

const MovieCard = ({ movie }) => {
  {
    console.log(movie);
  }
  return (
    <>
      <div className="movieCard">
        <div className="movieCard-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie image"
          />
        </div>
        <a className="movie-link" href="">
          <div className="movieCard-details">
            <p>{movie.original_title || movie.original_name}</p>
            <p>{movie.release_date || movie.first_air_date}</p>
          </div>
        </a>
      </div>
      ;
    </>
  );
};

export default MovieCard;
