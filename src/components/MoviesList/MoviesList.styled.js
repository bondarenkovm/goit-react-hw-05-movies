import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled.li`
  width: calc((100% - 44px) / 4);
  border: 1px solid #d1d1d1;
  border-radius: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 437px;
  border-radius: 10px;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
