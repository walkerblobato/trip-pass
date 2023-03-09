import { createTheme } from '@mui/material';
import { cyan, indigo, blueGrey } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3' ,
    }
  }
});