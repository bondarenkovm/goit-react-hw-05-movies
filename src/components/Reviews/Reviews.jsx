import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/fetchMoviesAPI';
import { List } from './Reviews.styled';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movieReviews = await fetchMovieReviews(id);
        setReviews([...movieReviews]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <section>
      {!reviews.length ? (
        <p>There are no reviews for this movie</p>
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      )}
    </section>
  );
}
export default Reviews;
