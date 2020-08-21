import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
