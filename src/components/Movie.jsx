import React from "react";
import { MovieContainer, MovieImage, MovieInfo, MovieTitle, MovieInfoText } from "./Movie.style";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


export default function Movie(props) {
  return (
    <MovieContainer>
      <MovieImage src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <MovieInfo>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieInfoText>{props.vote_average}</MovieInfoText>
      </MovieInfo>
    </MovieContainer>
  );
}