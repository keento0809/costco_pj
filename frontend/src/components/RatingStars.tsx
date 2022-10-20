import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'The worst',
  1: 'Never again',
  1.5: 'Horrible',
  2: 'Dissapointed',
  2.5: 'Meh',
  3: 'Ok',
  3.5: 'Good',
  4: 'Nice',
  4.5: 'Excellent!',
  5: 'Awesome!!!',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RatingStars = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Rating
          name='hover-feedback'
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
          size='large'
        />
      </Box>
      {value !== null && (
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </>
  );
};

export default RatingStars;
