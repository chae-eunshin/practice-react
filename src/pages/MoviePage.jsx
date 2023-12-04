import React,{useState} from "react";
import {movies} from '../components/MovieDummy';
import { useParams } from 'react-router-dom';
import Movie from "../components/Movie";

export default function MoviePage() {
    let { title } = useParams();
    
    // URL의 title과 일치하는 영화 정보 찾기
    const movie = movies.find(movie => movie.title === title);
  
    return (
      <div>
        {movie ? ( //movies 배열에서 제목이 일치하는 값을 찾지 못하면 즉 없는 값이면 movie에 undefined가 담김 그리고 자바스크립트는 이를 false로 봄 
          <div>
            <h2>{movie.title}</h2>
            <Movie/>
          </div>
        ) : (
          <p>영화를 찾을 수 없습니다.</p>
        )}
      </div>
    );
  }