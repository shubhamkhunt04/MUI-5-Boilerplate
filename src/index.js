// * React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// * Mui Imports
import { ThemeProvider } from '@mui/material/styles';

// * Other Imports
import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
