import React, { Component,useState } from "react";
import { movies } from "./MovieDummy";
import Detail from '../pages/Detail';
import { AppContainer, MovieContainer, MovieImage, MovieInfo, MovieTitle, MovieInfoText } from "../Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

/*export default function Movie() { //함수형 컴포넌트는 usestate hook을 사용해서 상태 관리를 해주는데 this.state를 쓰려면 이제 클래스형 컴포넌트를 만들어줘야함
  const [selectedMovies, setSelectedMovies] = useState([]); //기본은 빈 배열 상태

  const handleMovieClick = (movie) => {
    setSelectedMovies(prevSelectedMovies => { //set함수에 전달된 상태 업데이트 함수의 매개변수는 이름과 상관없이 이전 상태를 참조하기 위함임
      const isAlreadySelected = prevSelectedMovies.some(selectedMovie => selectedMovie.id === movie.id);//some은 배열에서 조건을 만족하는 요소가 하나라도 있으면 true를 반환하는 메서드// 유저가 고른 영화들 중에 현재 클릭한 item과 아이디가 일치하는게 있으면 true
      if (isAlreadySelected) { //true라는 건 현재 영화의 아이디가 기존에 고른 영화들 중에 있다는 의미임
        return prevSelectedMovies.filter(selectedMovie => selectedMovie.id !== movie.id); //이 영화는 이미 배열에 있는데 클릭을 했으므로 선택한 영화에서 빼줌 -> 영화 소개를 닫음 
      } else { //기존에 고른(소개를 열어놓은) 영화들 중에 없는 영화를 클릭함
        return [...prevSelectedMovies, movie]; //열어놓을 영화들에 추가함
      } //... 이게 스프레드 연산자라고 함 이건 기존의 배열을 복사하겠다는 의미고 뒤에 붙여놓은 요소가 새로운 배열에 추가할 요소인 거..기존의 배열을 훼손하지 않고 불변성을 지키는 것임
    }); 
  };//some,filter 모두 자바스크립트의 배열 메서드 둘 다 콜백함수를 매개변수로 받음, 콜백함수는 배열의 각 요소들에 대해 실행이 됨

  const isMovieSelected = (movieId) => {
    return selectedMovies.some(movie => movie.id === movieId); //선택된(소개를 열어놓은) 영화들 중에 지금 클릭한 영화의 아이디와 일치하는 영화가 있으면 true를 리턴해줌
  };

  return (
    <div>
      <AppContainer>
        {movies.results.map((item) => (
          <MovieContainer key={item.id} onClick={() => handleMovieClick(item)}>
            {isMovieSelected(item.id) ? ( //지금 클릭한 영화가 배열 안에 있는지 
              <Detail overview={selectedMovies.find(movie => movie.id === item.id).overview} /> //있으면 영화 소개를 표시함 find는 조건이 참을 만족하는 첫번쨰 요소를 반환한다고 함
            ) : ( //리액트는 여러 컴포넌트를 반환할 때 하나의 부모요소로 감싸야함 이때 fragment(빈 태그)를 사용할 수 있음
              <> 
                <MovieImage src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
                <MovieInfo>
                  <MovieTitle>{item.title}</MovieTitle>
                  <MovieInfoText>{item.vote_average}</MovieInfoText>
                </MovieInfo>
              </>
            )}
          </MovieContainer>
        ))}
      </AppContainer>
    </div>
  );
}*/


// 클래스형 컴포넌트 선언
export default class Movie extends Component {
  constructor(props) {
    super(props);
    // this.state 초기화
    this.state = {
      selectedMovies: [] // 선택된 영화들의 상태를 관리하는 배열
    };
  }

  // 영화 클릭 핸들러
  handleMovieClick = (movie) => {
    this.setState(prevState => {
      const isAlreadySelected = prevState.selectedMovies.some(
        selectedMovie => selectedMovie.id === movie.id
      );

      if (isAlreadySelected) {
        // 이미 선택된 영화라면 배열에서 제거
        return {
          selectedMovies: prevState.selectedMovies.filter(
            selectedMovie => selectedMovie.id !== movie.id
          )
        };
      } else {
        // 새로 선택된 영화라면 배열에 추가
        return {
          selectedMovies: [...prevState.selectedMovies, movie]
        };
      }
    });
  };

  // 영화가 선택되었는지 확인하는 함수
  isMovieSelected = (movieId) => {
    return this.state.selectedMovies.some(movie => movie.id === movieId);
  };

  render() { //렌더 함수가 필수적임. 렌더 함수에서 렌더링(화면에 사용자 인터페이스를 띄우는 것)할 jsx를 반환해줘야하기 때문
    return ( //컴포넌트의 상태나 속성이 업데이트 될 때마다 렌더 함수를 호출하여 다시 렌더링함 
      <div>
        <AppContainer>
          {movies.results.map((item) => (
            <MovieContainer key={item.id} onClick={() => this.handleMovieClick(item)}>
              {this.isMovieSelected(item.id) ? (
                <Detail overview={this.state.selectedMovies.find(movie => movie.id === item.id).overview} />
              ) : (
                <>
                  <MovieImage src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
                  <MovieInfo>
                    <MovieTitle>{item.title}</MovieTitle>
                    <MovieInfoText>{item.vote_average}</MovieInfoText>
                  </MovieInfo>
                </>
              )}
            </MovieContainer>
          ))}
        </AppContainer>
      </div>
    );
  }
}

