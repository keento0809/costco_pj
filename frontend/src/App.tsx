import "./App.css";
import Profile from "./pages/Profile";
import History from "./pages/History";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Theme, {colorTheme } from "./theme/Theme";

function App() {
	return (
    <div className='App'>
      {/* <ThemeProvider theme={Theme}> */}
			<ThemeProvider theme={colorTheme}>
				<Typography variant='h1' color='primary'>
					Responsive h1
				</Typography>
				<Typography variant='h2'>Responsive h2</Typography>
				<Typography variant='h3'>Responsive h3</Typography>
				<Typography variant='h4'>Responsive h4</Typography>
				<Typography variant='h5'>Responsive h5</Typography>
				<Typography variant='body1'>Responsive body1</Typography>
				<Typography variant='body2'>Responsive body2</Typography>
			</ThemeProvider>
		{/* </ThemeProvider> */}
			<Profile />
		</div>
	);
}

export default App;
