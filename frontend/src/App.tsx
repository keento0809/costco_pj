import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Typography variant='h3'>Responsive h3</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
