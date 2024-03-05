//import axios from "axios";
import { React, useState } from "react";
import MovieList from "./MovieList";
import "./styles.css";

const Home = () => {
  /* let api_key = "4913407cf8779743004ecf4de56a631e";
  const search_Api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

  const [term, setTerm] = useState("");
  const [movie, setMovie] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    await axios
      .get(`${search_Api}${term}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  };

  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      
    }
  };*/
  return (
    <>
      <body>
        <div className="root">
          <div>
            <div className="header">
              <div className="header-content">
                <div className="header-content-text">
                  <h1> Entertainment hub</h1>
                  <h3>
                    You will discover exciting, popular and trending movies and
                    Tv shows.
                  </h3>
                </div>
                <form
                  action
                  className="header-form-content"
                  /*onSubmit={handleSearch}*/
                >
                  <div className="header-form-control">
                    <input
                      type="text"
                      name="search"
                      id
                      placeholder="Find interesting movies"
                      className="form_element form_text"
                      /*onChange={(e) => {
                        setTerm(e.target.value);
                      }}
                      value={term}
                      onKeyDown={searchMovie}*/
                    ></input>
                    <button type="submit" className="form_element form_btn">
                      Go!
                    </button>
                  </div>
                </form>
                <p>Please fill the search field</p>
              </div>
            </div>
            <div className="bottom-container">
              <MovieList />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
