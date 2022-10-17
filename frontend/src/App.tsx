import { ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Typography variant='h3'>test by Koki</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
