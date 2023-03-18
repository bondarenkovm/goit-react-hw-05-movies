import PropTypes from 'prop-types';
import { List, Item, Img, Title } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <div>
              <Img
                loading="lazy"
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : 'https://images.prom.ua/211029177_w640_h640_211029177.jpg'
                }
                alt={title}
              />
            </div>

            <Title>{title}</Title>
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
      title: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
