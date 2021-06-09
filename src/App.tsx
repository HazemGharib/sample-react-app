import React from 'react';
import styled from 'styled-components';
import {Logo} from './components/Logo';
import {ProductList} from './components/ProductList';

const Container = styled.div`
  margin: 10px auto;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <Logo />
      <ProductList />
    </Container>
  );
}
