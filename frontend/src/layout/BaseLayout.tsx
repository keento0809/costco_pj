import React, { FC } from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import CssBaseline from '@mui/material/CssBaseline';

interface Layout {
  children: React.ReactNode;
}

const BaseLayout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='xl'>{children}</Container>
      </React.Fragment>
    </>
  );
};

export default BaseLayout;
