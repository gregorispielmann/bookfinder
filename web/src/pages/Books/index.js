import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/all';
import {
  Container,
  Title,
  SearchBar,
  BookList,
  PageIndicator,
  Indicator,
} from './styles';

import api from '~/services/api';

import BookCardInfo from '~/components/BookCardInfo';
import Loading from '~/components/Loading';

export default function Books() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const id = localStorage.getItem('userId');

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      try {
        const res = await api({
          method: 'post',
          url: '/books',
          data: {
            title: query,
            startIndex: page,
          },
          headers: {
            Authorization: id,
          },
        });

        setBooks(res.data);
      } catch (e) {
        if (e.response.status === 401) toast.error('Não autorizado');
      }
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      if (query !== '') {
        loadBooks(query);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [id, page, query]);

  useEffect(() => {
    const intPart = parseInt(books.totalItems / 10);
    const decPart = books.totalItems % 10;
    if (books.totalItems && books.totalItems > 10)
      setTotalPages(intPart + (decPart > 0 && 1));
    else setTotalPages(0);
  }, [books]);

  const handleAdd = async bookId => {
    try {
      await api({
        method: 'post',
        url: `favorites/${bookId}`,
        headers: { Authorization: id },
      });
      toast.success('Livro favoritado com sucesso');
    } catch (e) {
      toast.error('Livro já favoritado');
    }
  };

  const upPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const downPage = () => {
    if (page !== 0) setPage(page - 1);
  };

  return (
    <Container>
      <Title>Livros</Title>
      <SearchBar
        placeholder="Digite o título do livro desejado"
        onChange={e => setQuery(e.target.value)}
      />
      <BookList>
        {isLoading ? (
          <Loading />
        ) : books.items && books.items.length > 0 ? (
          books.items.map(b => {
            const book = b.volumeInfo;
            return (
              <BookCardInfo
                key={b.id}
                id={b.id}
                book={book}
                handleAdd={handleAdd}
              />
            );
          })
        ) : (
          <div>Nenhum livro encontrado</div>
        )}
      </BookList>
      <PageIndicator>
        <Indicator disabled={page === 0} onClick={downPage}>
          <FaArrowLeft size={10} />
          Anterior
        </Indicator>
        {page + 1} de {totalPages + 1}
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
