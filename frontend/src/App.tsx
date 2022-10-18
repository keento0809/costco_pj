import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { colorTheme } from "./theme/Theme";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className='App'>
      <ThemeProvider theme={colorTheme}>
        
			<Profile />
      </ThemeProvider>
		</div>
	);
}

export default App;
