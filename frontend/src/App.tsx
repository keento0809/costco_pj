import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Theme from './theme/Theme';
import UserDetail from './pages/UserDetail';
// import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Typography variant='h3'>Responsive h3</Typography>
        {/* <Home /> */}
        <UserDetail />
      </div>
    </ThemeProvider>
  );
}

export default App;
