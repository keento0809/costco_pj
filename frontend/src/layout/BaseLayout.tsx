import React, { FC } from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';

interface Layout {
  children: React.ReactNode;
}

const BaseLayout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth='sm'>{children}</Container>
    </>
  );
};

export default BaseLayout;
