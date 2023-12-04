import Header from './pages/Header';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './components/Movie';
import {movies} from './components/MovieDummy';
import Celebirity from './pages/Celebirity';
import TV from './pages/TV';
import MoviePage from './pages/MoviePage';

/* 라우팅이란 페이지를 보여주기 위해서 하는 거임. 유저가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것. 라운팅 관련 라이브러리 중 하나가 리액트 라우터 

리액트는 Single Page Application 기존 웹페이지처럼 여러개의 페이지를 사용하지만 새로운 페이지를 로드하는 게 아니라 한페이지 내에서 필요한 데이터만 가져오는 형태,
그니까 새로운 페이지는 불러오지 않고 각각의 url에따라 데이터를 가져와 하나의 페이지에 렌더링 해줌 

Router는 라우팅의 기반 형성-모든 라우터와 네비게이션 컴포넌트 포함, BrowserRouter는 UI와 URL을 동기화해서 사용 

Route는 path속성과 일치할 때 해당 element 속성의 컴포넌트를 렌더링함


Routes안에  Route를 여허개 넣어 각각의 경로에 대한 라우팅을 정의할 수 있음
*/

function App() {


  return (
    <div className="App">
      <div style={{ paddingBottom: '5vh' }}>
          <Router>
          <Header/>
          <div> 
          {movies.results.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.title}`}>
            {movie.title}
          </Link>
        ))}
      </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie' element={<Movie />} />
              <Route path='/celebirity' element={<Celebirity />} />
              <Route path='/tv' element={<TV/>} />
              <Route path="/movie/:title" element={<MoviePage />} /> {/*처음에는 useParams를 사용하는 줄 알았음 그런데 영화 이름에 따라 URL주소를 달리 지정하고 각각의 지정 경로에 따라 해당된 페이지를 라우팅하는 건 Link를 사용하는 거였음Link를 이용해 사용자가 클릭할 수 있는 링크(url주소)를 만들고 Route를 이용해 클릭 시에 경로에 해당되는 페이지를 라우팅해서 보여주는 것임
              useParams는 이미 설정된 URL 경로에서 매개변수(예: 영화 제목)를 가져오기 위해 사용
              여기서 중요한건 이미 설정된 경로에서 매개변수 값을 동적으로 가져와서 컴포넌트 내에서 사용하고자 할 때 쓴다느 것  */}
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
