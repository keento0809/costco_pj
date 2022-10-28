import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

interface Layout {
  children: React.ReactNode;
}

const GridCenterLayout: FC<Layout> = ({ children }) => {
  return (
    <Grid
      container
      spacing={6}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      {children}
    </Grid>
  );
};

export default GridCenterLayout;
