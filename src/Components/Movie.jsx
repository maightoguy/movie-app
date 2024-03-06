import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieStyles.css";

//const seriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=4913407cf8779743004ecf4de56a631e`;
const Movie = () => {
  const [mov, setMov] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { movieid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=4913407cf8779743004ecf4de56a631e`
        )
          .then((resp) => resp.json())
          .then((resp) => setMov(resp));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieid]);

  const { genres = [] } = mov;
  let genresArr = [];

  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });

  const genre2 = genresArr;
  const genreStr = genre2.toString();
  const firstTwo = genreStr.split(" ,", 2);

  return (
    <body>
      <div className="root">
        <div>
          {isLoading ? (
            <p>....Loading</p>
          ) : (
            <div
              className="movie"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${mov.backdrop_path})`,
              }}
            >
              <div className="details">
                <div className="poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                    alt="Movie Poster"
                  />
                </div>
                <div className="desc">
                  <h2 className="desc_heading">{mov.title}</h2>
                  <p className="desc_text_short">{mov.tagline}</p>
                  <h3 className="desc_heading">Overview</h3>
                  <p className="desc_text">{mov.overview}</p>
                  <div className="genres desc_text">
                    <h3>Genres:</h3>
                    <div className="genres_container">
                      <div className="genre">{firstTwo}</div>
                    </div>
                    <div className="runtime">
                      Runtime: {Math.round(mov.runtime / 60)} hrs
                      <div className="rating">
                        Rating: {Math.round(mov.vote_count / 10)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default Movie;
