import Detail from "./components/Detail";
import Movie from "./components/Movie";
import { movies } from "./movie";

function App() {
  return (
    <div>
      <div className="app-container">
        <div>
          {movies.results.map((item) => {
            return (
              <Movie
                title= {item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </div>
        <div>
        {movies.results.map((item) => {
          return (
            <Detail
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  </div>
  );
}

export default App;
