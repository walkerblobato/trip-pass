import { ThemeProvider } from '@emotion/react';
import { Main } from './pages/PassaportForms';

import { LightTheme } from './shared/themes';


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Main />
    </ThemeProvider>
  );
};