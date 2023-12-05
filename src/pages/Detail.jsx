import React from "react";

export default function Detail(props) {
  return (
    <div className="movie-container">
      <div className = "movie-overview"style={{padding:"20px"}}>
        <p id = "overview">{props.overview}</p>
      </div>
    </div>
  );
}