import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { colorTheme } from "./theme/Theme";
import  History  from './pages/History';

function App() {
  return (
		<div className='App'>
      <ThemeProvider theme={colorTheme}>
        <History/>
      </ThemeProvider>
		</div>
	);
}

export default App;


