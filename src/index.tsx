import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.styled';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styles/GlobalStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(




  <ThemeProvider theme={theme}>

    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>

  </ThemeProvider>





);

