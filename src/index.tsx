import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { rootReducer } from './store/rootReducer';


// const store = createStore(rootReducer, compose(
//   /* eslint-disable no-underscore-dangle */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   /* eslint-enable */
// ));


const store = createStore(rootReducer, composeWithDevTools());




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
