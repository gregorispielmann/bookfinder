import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: inline-block;

  padding: 20px;
  width: calc(100% / 4 - 40px);
  flex-grow: 1;
  margin: 5px;
`;

export const CoverFavorite = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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
  display: relative;
  height: 250px;
  min-width: 150px;

  margin-bottom: 20px;
  margin-right: 10px;

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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
