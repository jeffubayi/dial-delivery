import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      light:"#ffb3b3",
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
