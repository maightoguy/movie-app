import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieStyles.css";

const CONTENT_TYPES = {
  movie: "https://api.themoviedb.org/3/movie/",
  tv: "https://api.themoviedb.org/3/tv/",
};

const imageDefault =
  "https://image.tmdb.org/t/p/w500//lKoeJ4VZIsv169jO50TOKHds7ip.jpg";

const Movie = () => {
  const [mov, setMov] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("movie"); // Initial category

  let { movieid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${CONTENT_TYPES[category]}${movieid}?api_key=4913407cf8779743004ecf4de56a631e`;
        const response = await fetch(apiUrl);
        const fetchedData = await response.json();

        if (response.ok) {
          // Check for successful response
          setMov(fetchedData);
          setCategory(category); // Set category only if response is successful
        } else {
          console.error("API request failed:", response.statusText);
          // Handle failed response: potentially switch category, display error message, etc.
          setCategory(category === "movie" ? "tv" : "movie");
        }
      } catch (error) {
        console.error(error);
        setCategory(category === "movie" ? "tv" : "movie");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieid, category]);

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
                    src={
                      mov?.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
                        : imageDefault
                    }
                    alt="Movie Poster"
                  />
                </div>
                <div className="desc">
                  <h2 className="desc_heading">
                    {mov?.title || "No title available"}
                  </h2>
                  <p className="desc_text_short">
                    {mov?.tagline || "No tagline available"}
                  </p>
                  <h3 className="desc_heading">Overview</h3>
                  <p className="desc_text">
                    {mov?.overview || "No overview available"}
                  </p>
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
