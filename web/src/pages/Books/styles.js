import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 5em;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const BookList = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;

  padding: 20px;

  background: #4190c1;
  border-radius: 5px;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const PageIndicator = styled.div`
  display: flex;

  margin-top: 20px;
`;

export const Indicator = styled.button`
  display: flex;
  align-items: center;
  margin: 0 20px;

  border: none;
  background: none;

  color: ${props => (props.disabled ? 'rgba(255,255,255,0.2)' : '#fff')};
  font-size: 14px;
  transition: 200ms ease-in;

  :hover {
    color: ${props => (props.disabled ? null : darken(0.4, '#4190c1'))};
  }
`;
