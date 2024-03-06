import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const imageDefault =
  "https://image.tmdb.org/t/p/w500//lKoeJ4VZIsv169jO50TOKHds7ip.jpg";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movieCard">
        <div className="movieCard-poster">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : imageDefault
            }
            alt="Movie Poster"
          />
        </div>
        <Link className="movie-link" to={`${movie.id}`}>
          <div className="movieCard-details">
            <p>{movie.original_title || movie.original_name}</p>
            <p>{movie.release_date || movie.first_air_date}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
