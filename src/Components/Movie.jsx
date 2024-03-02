import React from "react";

//https://api.themoviedb.org/3/movie/157336?api_key=REACT_APP_API_KEY
const Movie = () => {
  return (
    <div className="movie-flex">
      <img src="/" alt="" />
      <div className="flex-right">
        <h1>Movie title rating</h1>
        <div className="details-flex">
          <span>Year</span>
          <span>Length</span>
          <span>Director</span>
        </div>
        <div className="details-flex">
          <p>cast: cast1, cast2, ....</p>
        </div>
        <div className="details-flex">
          <p>
            Description:This alloy of Iron and Carbon (hence the name) has been
            with us for centuries. It is also a very widely used metal and we
            could indeed be said to be in the steel age. Carbon steel scores
            highly for all four of the properties which define strength.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
