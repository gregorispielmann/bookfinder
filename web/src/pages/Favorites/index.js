import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/all';
import { Container, Title, BookList, PageIndicator, Indicator } from './styles';

import api from '~/services/api';

import BookCard from '~/components/BookCard';
import Loading from '~/components/Loading';

export default function Favorites() {
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const id = localStorage.getItem('userId');

  useEffect(() => {
    async function loadFavorites() {
      setIsLoading(true);
      const res = await api.get(`favorites?page=${page}`, {
        headers: { Authorization: id },
      });

      setFavorites(res.data.favoriteBooks);
      setTotal(res.data.total);
      setIsLoading(false);
    }

    loadFavorites();
  }, [id, page]);

  useEffect(() => {
    const intPart = parseInt(total / 10);
    const decPart = total % 10;
    if (total > 10) setTotalPages(intPart + (decPart > 0 && 1));
    else setTotalPages(0);
  }, [total]);

  const handleRemove = async bookId => {
    setIsLoading(true);
    await api.delete(`favorites/${bookId}`, {
      headers: { Authorization: id },
    });
    const res = await api.get('favorites', {
      headers: { Authorization: id },
    });

    setFavorites(res.data.favoriteBooks);
    setIsLoading(false);
    toast.success('Livro removido dos favoritos com sucesso');
  };

  const upPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const downPage = () => {
    if (page !== 0) setPage(page - 1);
  };

  return (
    <Container>
      <Title>Favoritos</Title>
      <BookList>
        {isLoading ? (
          <Loading />
        ) : favorites && favorites.length > 0 ? (
          favorites.map(f => (
            <BookCard key={f.title} book={f} handleRemove={handleRemove} />
          ))
        ) : (
          <div>Nenhum livro favoritado</div>
        )}
      </BookList>
      <PageIndicator>
        <Indicator disabled={page === 0} onClick={downPage}>
          <FaArrowLeft size={10} />
          Anterior
        </Indicator>
        {page + 1} de {totalPages}
        <Indicator
          disabled={page === totalPages - 1 || totalPages === 0}
          onClick={upPage}
        >
          Próxima
          <FaArrowRight size={10} />
        </Indicator>
      </PageIndicator>
    </Container>
  );
}
