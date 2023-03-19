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
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Img = styled.img`
  width: 100%;
  height: 437px;
  border-radius: 10px 10px 0px 0px;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
