import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;

  padding: 20px;
  width: 100%;
  max-width: 500px;
  flex-grow: 1;
  margin-bottom: 10px;
`;

export const CoverFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 300px;
`;

export const FavButton = styled.button`
  border-radius: 30px;
  border: 1px solid red;
  width: 150px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  color: red;
  transition: 200ms ease-in-out;

  :hover {
    border: 1px solid ${darken(0.2, 'red')};
    color: ${darken(0.2, 'red')};
  }
`;

export const Cover = styled.div`
  height: 300px;
  width: 200px;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 18px;
  margin-top: 10px;
`;

export const Divider = styled.div`
  background: #666;
  height: 2px;
  margin: 10px 0;
`;

export const Description = styled.div`
  color: #666;
  font-size: 14px;
`;
