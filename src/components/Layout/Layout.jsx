import { Outlet } from 'react-router-dom';
import { Container, Header, List, Link } from './Layout.styled';
import { Toaster } from 'react-hot-toast';

function Layout() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </List>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
    </>
  );
}
export default Layout;
