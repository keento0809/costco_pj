import React, { FC } from 'react';
import BasicButton from '../components/BasicButton';
import BasicCard from '../components/BasicCard';
import BaseLayout from '../layout/BaseLayout';
import Box from '@mui/material/Box';

const UserDetail: FC = () => {
  return (
    <BaseLayout>
      <Box sx={{ py: 4 }}>
        <BasicCard
          username='Koki'
          discription='Kokis page'
          place='Chinatown'
          rate={3.5}
        />
      </Box>
      <BasicButton text='ask' size={1} />
    </BaseLayout>
  );
};

export default UserDetail;
