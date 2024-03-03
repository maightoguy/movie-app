import React from "react";
import "./styles.css";

const MovieCard = () => {
  return (
    <>
      <div className="movieCard">
        <div className="movieCard-poster">
          <img src={`https://www.themoviedb.org/t/p/w500/`} />
        </div>
        <a className="movie-link" href="">
          <div className="movieCard-details">
            <p>{}</p>
            <p>23 feb 2000</p>
          </div>
        </a>
      </div>
      ;
    </>
  );
};

export default MovieCard;
