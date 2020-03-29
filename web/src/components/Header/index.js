import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, IoIosLogOut, FaBook } from 'react-icons/all';

import logo from '~/assets/logohorizontal.svg';

import { Container, Logo, Menu, MenuItem, LinkItem } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/favorites">
        <Logo src={logo} />
      </Link>

      <Menu>
        <LinkItem to="/favorites">
          <MenuItem>
            <FaHeart size={15} style={{ marginRight: '5px' }} />
            Favoritos
          </MenuItem>
        </LinkItem>
        <LinkItem to="/books">
          <MenuItem>
            <FaBook size={15} style={{ marginRight: '5px' }} />
            Pesquisar Livros
          </MenuItem>
        </LinkItem>
        <LinkItem to="/logout">
          <MenuItem>
            <IoIosLogOut size={25} style={{ marginRight: '5px' }} />
            Logout
          </MenuItem>
        </LinkItem>
      </Menu>
    </Container>
  );
}
