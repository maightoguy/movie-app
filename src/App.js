import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import Popular from "./Pages/Popular";
import Series from "./Pages/Series";
import Trending from "./Pages/Trending";

export const AllContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":movieid" element={<Movie />}></Route>
        <Route path="/Pages/Popular" element={<Popular />}></Route>
        <Route path="/Pages/Series" element={<Series />}></Route>
        <Route path="/Pages/Trending" element={<Trending />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
