import { useParams, Link, Outlet } from 'react-router-dom';

function MoviesDetails() {
  const { id } = useParams();
  //   console.log(id);
  return (
    <>
      <h1>MoviesDetails: {id}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
export default MoviesDetails;
