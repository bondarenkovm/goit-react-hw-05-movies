import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
`;
export const Item = styled.li`
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Img = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 10px 10px 0px 0px;
`;
