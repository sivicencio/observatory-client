import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux';
import App from './App';

const { store } = configureStore();


export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
