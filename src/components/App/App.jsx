import Cast from 'components/Cast/Cast';
import Layout from 'components/Layout/Layout';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export { App };
