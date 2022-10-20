import { createTheme } from "@mui/material/styles";

const Theme = createTheme();
export const colorTheme = createTheme({
	palette: {
		primary: {
			main: "#0B5DA8",
		},
		secondary: {
			main: "#E51D39",
		},
		lighttext: {
			main: "#D3D3D3",
		},
	},
	typography: {
		h1: {
			fontSize: "2rem",
			[Theme.breakpoints.up("md")]: {
				fontSize: "2.2rem",
			},
		},
		h2: {
			fontSize: "1.7rem",
			[Theme.breakpoints.up("md")]: {
				fontSize: "1.9rem",
			},
		},
		h3: {
			fontSize: "1.5rem",
			[Theme.breakpoints.up("md")]: {
				fontSize: "1.7rem",
			},
		},
		h4: {
			fontSize: "1.3rem",
			[Theme.breakpoints.up("md")]: {
				fontSize: "1.5rem",
			},
		},
		h5: {
			fontSize: "1rem",
			[Theme.breakpoints.up("md")]: {
				fontSize: "1.2rem",
			},
		},
		body1: {
			fontSize: "0.8rem",
			fontFamily: "playfair",
			[Theme.breakpoints.up("md")]: {
				fontSize: "1rem",
			},
		},
		body2: {
			fontSize: "0.8rem",
			fontWeight: 700,
			[Theme.breakpoints.up("md")]: {
				fontSize: "1rem",
				fontWeight: 700,
			},
		},
		button: { textTransform: "none" },
	},
});

Theme.typography.body1 = {
  fontSize: '0.8rem',
  [Theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    color: 'text.secondary',
  },
};

export default Theme;
