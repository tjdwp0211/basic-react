import { React, useState } from "react";
import Movie from "../movie-component/Movie"
import MovieForm from "../movie-component/MovieForm"

const Movies = ({  }) => {

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
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie}/>
            {renderMovies}
        </>
    );
};

export default Movies;