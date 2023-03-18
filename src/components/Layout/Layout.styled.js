import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Header = styled.header`
  background-color: #4fa94d;
  padding: 20px 0px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  &.active {
    color: black;
  }
`;
