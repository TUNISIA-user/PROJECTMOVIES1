import React from "react";
import "./ResultCard.css";
const ResulTCard = ({ movie }) => {
  return (
    <>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.Poster ? (
            <img src={movie.Poster} alt={movie.title} />
          ) : (
            <div className="filter-poster"></div>
          )}
        </div>
        <div className="info">
          <div className="heading">
            <h3 className="title">{movie.title}</h3>
            {movie.Year ? <h3 className="release-date">{movie.Year}</h3> : "-"}
          </div>
          <div className="controles">
            <button className="btn">Add to WatchList</button>
            <button className="btn">Add to watched</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResulTCard;
