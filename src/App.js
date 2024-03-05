import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":movieid" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
