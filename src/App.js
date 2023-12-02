import React from "react";
import Movie from "./components/Movie";
import { movies } from "./movie";
import { GlobalStyle, AppContainer } from "./components/Movie.style";

function App() {
  return (
    <div>
    <div>
    <AppContainer>
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </AppContainer>
    </div>
    </div>
  );
}

export default App;
