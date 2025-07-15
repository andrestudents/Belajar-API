import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { getMoviesList, searchMovies } from './api';
const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMoviesList().then((result) => {
      setPopularMovies(result);
    })
  }, [])

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovies(q);
      setPopularMovies(query.results);
    }
  };
  // cek di console
  // console.log({ popularMovies: popularMovies });

  const RenderMovieslist = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='movie-wrapper' key={i}>
          <div className="movie-title"> {movie.title}</div>
          <img className="movie-image"
            src=
            {`${process.env.REACT_APP_BASE_IMG_URL}/${movie.poster_path}`}
          // {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          />
          <div className="movie-date"> release : {movie.release_date} </div>
          <div className="movie-rate"> {movie.vote_average} </div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Movies</h1>
        <input
          placeholder="Cari..."
          className='movie-search'
          onChange={({ target }) => search(target.value)} />

        <div className="movie-container">
          <RenderMovieslist />
        </div>

      </header>
    </div>
  );
}

export default App;
