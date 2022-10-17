import * as PaletteColorOptions from "@mui/material/styles/createPalette";

// PaletteOptions を拡張して、カラーキーワードを追加
declare module "@mui/material/styles/createPalette" {
	interface PaletteOptions {
		lighttext?: PaletteColorOptions;
		// mycolor2?: PaletteColorOptions;
	}
}

// Button の color prop に追加
// declare module "@mui/material/Card" {
// 	interface CardPropsColorOverrides {
// 		mycolor1: true;
// 		mycolor2: true;
// 	}
// }
