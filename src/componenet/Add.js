import React, { useState, useEffect } from "react";
import "./Add.css";
import axios from "axios";
import ResulTCard from "./ResulTCard";
const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchValue) {
      axios
        .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=fa0c32b6`)
        .then((response) => {
          if (response.data.Search) {
            console.log(response.data.Search);
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMovies([]);
    }
  }, [searchValue]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <ul className="results">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <ResulTCard movie={movie} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
