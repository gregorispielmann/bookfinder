import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <PulseLoader size={20} color="#fff" />
    </Container>
  );
}
