import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/fetchMoviesAPI';
import { List, Img, Item } from './Cast.styled';
// console.log(fetchMovieCast);
function Cast() {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  // console.log(results);

  useEffect(() => {
    async function fetch() {
      try {
        const movieCast = await fetchMovieCast(id);
        setResults([...movieCast]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <section>
      <List>
        {results.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            <Img
              loading="lazy"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `https://images.prom.ua/211029177_w640_h640_211029177.jpg`
              }
              alt={name}
            />
            <h3>{name}</h3>
            <p>
              <b>Character:</b> {character || 'There is no data'}
            </p>
          </Item>
        ))}
      </List>
    </section>
  );
}
export default Cast;
