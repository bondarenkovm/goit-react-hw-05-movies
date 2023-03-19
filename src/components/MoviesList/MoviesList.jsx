import PropTypes from 'prop-types';
import { List, Item, Img, Title, MovieLink } from './MoviesList.styled';

function MoviesList({ movies, link }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <MovieLink to={`${link ?? ''}${id}`}>
              <Img
                loading="lazy"
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : 'https://images.prom.ua/211029177_w640_h640_211029177.jpg'
                }
                alt={title}
              />

              <Title>{title}</Title>
            </MovieLink>
          </Item>
        );
      })}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
  link: PropTypes.string,
};

export default MoviesList;
