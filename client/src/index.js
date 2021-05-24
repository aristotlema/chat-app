import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import App from './components/App';
import store from './state/store';
import theme from './utils/theme';

const reduxStore = createStore(store, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);