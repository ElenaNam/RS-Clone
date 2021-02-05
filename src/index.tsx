import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ThemeProvider from './components/Settings/Theme/ThemeProvider';
import App from './App';


import reportWebVitals from './reportWebVitals';

import { rootReducer } from './store/rootReducer';


// const store = createStore(rootReducer, compose(
//   /* eslint-disable no-underscore-dangle */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   /* eslint-enable */
// ));


const store = createStore(rootReducer, composeWithDevTools());



const history = createBrowserHistory();
ReactDOM.render(
  
  <Provider store={store}>
    <Router {...history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>      
    </Router>,
  </Provider>,

  document.getElementById('root')
);
/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router {...history}>
        <ThemeProvider>
          <App />
        </ThemeProvider>      
      </Router>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); */



// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const history = createBrowserHistory();
// ReactDOM.render(
//   <Router {...history}>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>      
//   </Router>,
//   document.getElementById('root')
// );


// reportWebVitals();
