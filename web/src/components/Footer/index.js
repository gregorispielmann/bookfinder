import React from 'react';

import { FaHeart, FiCoffee } from 'react-icons/all';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      Made with <FaHeart size={20} color="red" style={{ margin: '0 5px' }} />
      and
      <FiCoffee size={20} style={{ margin: '0 5px' }} color="#fff" /> by
      <a
        href="https://github.com/gregorispielmann"
        style={{
          color: 'white',
          marginLeft: '5px',
          textDecoration: 'none',
        }}
      >
        Gregori Spielmann
      </a>
    </Container>
  );
}
