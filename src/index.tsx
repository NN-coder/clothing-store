import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import { store } from './store/store';
import { App } from './components/App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
  :root {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;

    --standard-color: #2d2d2d;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
