import React from "react";
import MovieList from "./MovieList";
import "./styles.css";

const Home = () => {
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
                <form action className="header-form-content">
                  <div className="header-form-control">
                    <input
                      type="text"
                      name="search"
                      id
                      placeholder="Find interesting movies"
                      className="form_element form_text"
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
