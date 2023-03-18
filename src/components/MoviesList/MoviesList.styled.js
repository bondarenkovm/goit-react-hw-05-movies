import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled.li`
  width: calc((100% - 36px) / 4);
`;
export const Img = styled.img`
  width: 291px;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
