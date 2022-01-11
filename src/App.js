import './App.css';
import Movie from './movie-component/Movie';
import MovieForm from './movie-component/MovieForm';
import { React, useState } from 'react';
import Navbar from './movie-component/Navbar';
import Users from './pages/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);

  const removeMovie = (id) =>{
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };
  
  const renderMovies = movies.length ? 
  movies.map((movies) => {
    return (
      <Movie 
        movie={movies} 
        key={movies.id}
        removeMovie={removeMovie}
      />
      );
  }) : '표시할 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/movies">
              <h1>Movie List</h1>
              <MovieForm addMovie={addMovie}/>
              {renderMovies}
            </Route>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
