import styled from '@emotion/styled';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: #4fa94d;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
