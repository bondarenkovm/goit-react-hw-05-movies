import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
`;
export const Links = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  color: black;
  border: 1px solid black;
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 10px;
  background-color: #f5f4fa;
  :hover,
  :focus {
    background-color: #4fa94d;
  }
`;
