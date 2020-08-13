import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { ApolloProvider } from '@apollo/client';

import ApolloClient from 'graphql/client';
import App from 'containers/App';
import theme from 'styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={ApolloClient}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
