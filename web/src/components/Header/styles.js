import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  padding: 20px;
  color: #999;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const Logo = styled.div`
  width: 150px;
  height: 50px;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #57a5d6;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #57a5d6;
  transition: 300ms ease-in-out

  :hover {
    color: ${darken(0.2, '#57a5d6')};
  }
`;
