import React from "react";

export default function Detail(props) {
  return (
    <div className="movie-container" id = "back">
      <div className = "movie-overview">
        <p id = "overview">{props.overview}</p>
      </div>
    </div>
  );
}