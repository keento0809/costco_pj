import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  text: string;
  onClick?: () => {};
  size: number | string;
}

const BasicButton: FC<Props> = (props) => {
  const { text, size } = props;

  return (
    <Stack spacing={2} direction='row'>
      <Button variant='contained' sx={{ width: size }}>
        {text}
      </Button>
    </Stack>
  );
};

export default BasicButton;
