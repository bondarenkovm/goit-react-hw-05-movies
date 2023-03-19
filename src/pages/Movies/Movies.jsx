import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar';
import { fetchMoviesByName } from 'services/fetchMoviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-hot-toast';

function Movies() {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('moviesName');
    // console.log(query);
    async function fetch() {
      try {
        const filmsName = await fetchMoviesByName(query);

        if (filmsName.length) {
          setResults([...filmsName]);
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
  }, [searchParams]);

  function formSubmitHandler(moviesName) {
    setSearchParams({ moviesName });
  }

  return (
    <div>
      <Searchbar formSubmit={formSubmitHandler} />
      <MoviesList movies={results} link="" />
    </div>
  );
}
export default Movies;
