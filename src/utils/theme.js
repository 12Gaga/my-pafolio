import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const getToTheme = (mode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#4EA292", //blurgreen
          },
          secondary: {
            main: "#121212", //black
          },
        }
      : {
          primary: {
            main: "#182332", //black
          },
          secondary: {
            main: "#0ef", //green
          },
        }),
  },
});
