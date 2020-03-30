import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/all';

import {
  Container,
  Cover,
  Title,
  CoverFavorite,
  FavButton,
  Divider,
  Description,
} from './styles';

export default function BookCardInfo({ id, book, handleAdd }) {
  return (
    <Container>
      <Title>{book.title}</Title>
      <Divider />
      <CoverFavorite>
        <Cover src={book.imageLinks && book.imageLinks.thumbnail} />
        <FavButton onClick={() => handleAdd(id)}>
          <FaHeart size={20} style={{ marginRight: '5px' }} />
          Favoritar
        </FavButton>
      </CoverFavorite>
      <Title>Descrição</Title>
      <Divider />
      <Description>
        {book.description && book.description.length > 0
          ? book.description
          : 'Não disponível'}
      </Description>
    </Container>
  );
}

BookCardInfo.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.objectOf(Object).isRequired,
  handleAdd: PropTypes.func.isRequired,
};
