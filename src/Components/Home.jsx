import React, { useState } from "react";
import MovieList from "./MovieList";
import "./styles.css";

const Home = () => {
  let api_key = "4913407cf8779743004ecf4de56a631e";

  const [searchMov, setSearchMov] = useState([]);
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH)
      .then((res) => res.json())
      .then((data) => setSearchMov(data));
  };

  const API_SEARCH = `https://api.themoviedb.org/3/search/multi?query=${term}&api_key=${api_key}`;

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
                  action=""
                  className="header-form-content"
                  onSubmit={handleSearch}
                >
                  <div className="header-form-control">
                    <input
                      type="text"
                      name="search"
                      id
                      placeholder="Find interesting movies"
                      className="form_element form_text"
                      onChange={(e) => {
                        setTerm(e.target.value);
                      }}
                    ></input>
                    <button type="submit" className="form_element form_btn">
                      Go!
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bottom-container">
              <MovieList searchMov={searchMov} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
