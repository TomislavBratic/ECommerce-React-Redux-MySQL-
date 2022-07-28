import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import Header from './containers/Header.js';
import { createStore, applyMiddleware, compose } from 'redux';
import ProductListing from './containers/ProductListing.js';
import reducers from './redux/reducers';


const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    
  </React.StrictMode>
);


