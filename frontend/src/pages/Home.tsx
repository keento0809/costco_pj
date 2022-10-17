import React, { FC, useState } from 'react';
import BaseLayout from '../layout/BaseLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCard from '../components/BasicCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export interface DatePickerProps {
  label: string;
  className?: string;
  disabled?: boolean;
  error?: string | boolean;
  onChange?: (v: string) => void;
  name?: string;
  value?: string | number | Date;
  min_date?: string | number | Date;
  max_date?: string | number | Date;
  placeholder?: string;
  autocomplete: 'birthday';
}

const Home: FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    console.log();
  };

  return (
    <BaseLayout>
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <h1>Popular users</h1>
        <Grid container spacing={2}>
          <Grid item xs={2.4}>
            <AccountCircleIcon />
          </Grid>
          <Grid item xs={2.4}>
            <AccountCircleIcon />
          </Grid>
          <Grid item xs={2.4}>
            <AccountCircleIcon />
          </Grid>
          <Grid item xs={2.4}>
            <AccountCircleIcon />
          </Grid>
          <Grid item xs={2.4}>
            <AccountCircleIcon />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <h1>New users</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              username={'koki'}
              discription={'koki description'}
              place={'Chinatown'}
              rate={3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              username={'koki'}
              discription={'koki description'}
              place={'Chinatown'}
              rate={3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              username={'koki'}
              discription={'koki description'}
              place={'Chinatown'}
              rate={3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BasicCard
              username={'koki'}
              discription={'koki description'}
              place={'Chinatown'}
              rate={3}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <h1>Search by date</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label='Date&Time picker'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard
            username={'koki'}
            discription={'koki description'}
            place={'Chinatown'}
            rate={3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard
            username={'koki'}
            discription={'koki description'}
            place={'Chinatown'}
            rate={3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard
            username={'koki'}
            discription={'koki description'}
            place={'Chinatown'}
            rate={3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard
            username={'koki'}
            discription={'koki description'}
            place={'Chinatown'}
            rate={3}
          />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;
