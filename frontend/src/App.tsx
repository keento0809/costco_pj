import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import UserDetail from './pages/UserDetail';
// import Review from './pages/Review';
// import Home from './pages/Home';
import { Theme } from './theme/Theme';
import Payment from './pages/Payment';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        {/* <Typography variant='h3'>Responsive h3</Typography> */}
        {/* <Home /> */}
        {/* <UserDetail /> */}
        {/* <Review /> */}
        <Payment />
      </div>
    </ThemeProvider>
  );
}

export default App;
