import React, { FC } from 'react';
import RatingStars from '../components/RatingStars';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import GridCenterLayout from '../layout/GridCenterLayout';
import BasicButton from '../components/BasicButton';

const Review: FC = () => {
  return (
    <>
      <GridCenterLayout>
        <Grid item xs={12}>
          <Typography variant='h3'>How was the card holder?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth='sm'
            sx={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            <AccountCircleIcon />
            <Typography variant='h3'>User name</Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <RatingStars />
        </Grid>
        <Grid item xs={12}>
          <BasicButton text={'submit'} size={100} />
        </Grid>
      </GridCenterLayout>
    </>
  );
};

export default Review;
