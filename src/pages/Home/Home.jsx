import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/fetchMoviesAPI';

import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  useEffect(() => {
    async function fetch() {
      try {
        const movies = await fetchMovies();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);
  return (
    <>
      <h1>Trending for today</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export default Home;
