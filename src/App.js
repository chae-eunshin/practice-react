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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie' element={<Movie />} />
              <Route path='/celebirity' element={<Celebirity />} />
              <Route path='/tv' element={<TV/>} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
