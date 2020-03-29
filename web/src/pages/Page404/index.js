import React, { useEffect } from 'react';

import { Container } from './styles';
import history from '~/services/history';

export default function Page404() {
  useEffect(() => {
    localStorage.clear();
    history.push('/');
  }, []);

  return <Container />;
}
