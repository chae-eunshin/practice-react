import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  return (
    <div className="movie-container" id= "front">
      <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <div className="movie-info">
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}