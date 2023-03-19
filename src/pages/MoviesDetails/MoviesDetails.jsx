import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMoviesAPI';
import { Wrapper, List, Links } from './MoviesDetails.styled';
import { TailSpin } from 'react-loader-spinner';

function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const year = new Date(release_date).getFullYear();

  useEffect(() => {
    async function fetch() {
      try {
        const filmDetails = await fetchMovieById(id);
        setMovie(filmDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <>
      <Wrapper>
        <img
          loading="lazy"
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w300' + poster_path
              : 'https://images.prom.ua/211029177_w640_h640_211029177.jpg'
          }
          alt={title}
        />
        <div>
          <h1>{`${title} (${year})`} </h1>
          <p>User Score: {`${Math.round(vote_average * 10)}`}%</p>
          <h3>Owerview</h3>
          <p>{`${overview}`}</p>
          <h3>Genres:</h3>
          {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
        </div>
      </Wrapper>
      <h3>Additional information</h3>
      <List>
        <li>
          <Links to="cast">Cast</Links>
        </li>
        <li>
          <Links to="reviews">Reviews</Links>
        </li>
      </List>
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
export default MoviesDetails;
