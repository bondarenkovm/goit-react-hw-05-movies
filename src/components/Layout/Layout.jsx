import { Outlet } from 'react-router-dom';
import { Container, Header, List, Link } from './Layout.styled';
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
    </>
  );
}
export default Layout;
