import React, { FC, useState } from 'react';
import BasicButton from '../components/BasicButton';
import BasicCard from '../components/BasicCard';
import BaseLayout from '../layout/BaseLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const UserDetail: FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  function disableRandomDates() {
    return Math.random() > 0.7;
  }

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
      <BasicButton text='ask' size={1} onClickEvent={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Select Date
          </Typography>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label='Select date'
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                shouldDisableDate={disableRandomDates}
              />
            </LocalizationProvider>
          </Box>
          <BasicButton
            text='Proceed to book'
            size={1}
            onClickEvent={handleOpen}
          />
        </Box>
      </Modal>
    </BaseLayout>
  );
};

export default UserDetail;
