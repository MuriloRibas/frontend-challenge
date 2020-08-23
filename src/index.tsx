import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Routes from './routes';
import { Provider } from 'react-redux';
import initStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Routes/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
