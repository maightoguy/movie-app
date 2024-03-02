import React from "react";

const MovieCard = () => {
  return (
    <>
      <div className="movieCard">
        <div className="movieCard-poster">
          <img />
        </div>
        <a className="movie-link" href="">
          <div className="movieCard-details">
            <p>Spaceman</p>
            <p>23 feb 2000</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default MovieCard;
