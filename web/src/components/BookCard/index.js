import React, { useState } from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/all';

import {
  Container,
  Cover,
  Title,
  CoverFavorite,
  FavButton,
  Divider,
  Description,
} from './styles';

export default function BookCard({ book, handleRemove }) {
  const [hovered, setHovered] = useState(false);

  const handleHovered = () => {
    setHovered(!hovered);
  };

  return (
    <Container>
      <Title>{book.title}</Title>
      <Divider />
      <CoverFavorite>
        <Cover src={book.image} />
        <FavButton
          onClick={() => handleRemove(book.id)}
          onMouseEnter={handleHovered}
          onMouseLeave={handleHovered}
        >
          {hovered ? (
            <>
              <FaHeartBroken size={20} style={{ marginRight: '5px' }} />
              Remover
            </>
          ) : (
            <>
              <FaHeart size={20} style={{ marginRight: '5px' }} />
              Favorito
            </>
          )}
        </FavButton>
      </CoverFavorite>
      <Title>Descrição</Title>
      <Divider />
      <Description>{book.description}</Description>
    </Container>
  );
}
