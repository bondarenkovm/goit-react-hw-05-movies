import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar';
import { fetchMoviesByName } from 'services/fetchMoviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-hot-toast';

function Movies() {
  const [movies, setmovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('moviesName') ?? '';
  useEffect(() => {
    // const query = searchParams.get('moviesName');

    async function fetch() {
      try {
        const filmsName = await fetchMoviesByName(query);

        if (filmsName.length) {
          setmovies([...filmsName]);
        } else {
          toast.error('No movies found!', {
            style: {
              background: '#ca1616',
              color: '#fff',
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (query) {
      fetch();
    }
  }, [query]);

  function formSubmitHandler(moviesName) {
    if (moviesName === '') {
      return setSearchParams({});
    }
    setSearchParams({ moviesName });
  }

  return (
    <div>
      <Searchbar formSubmit={formSubmitHandler} />
      <MoviesList movies={movies} link="" />
    </div>
  );
}
export default Movies;
