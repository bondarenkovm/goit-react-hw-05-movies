import { Link } from 'react-router-dom';
function Movies() {
  return (
    <div>
      {['movies1', 'movies2', 'movies3', 'movies4', 'movies5', 'movies6'].map(
        mov => {
          return (
            <Link key={mov} to={`${mov}`}>
              {mov}
            </Link>
          );
        }
      )}
    </div>
  );
}
export default Movies;
