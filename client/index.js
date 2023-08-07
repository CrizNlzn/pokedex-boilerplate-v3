import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

// Connects to HTML and loads it in the 'app' element
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
// routes in app will go in browser router so it can take every route and load it since we give it access from our import. 