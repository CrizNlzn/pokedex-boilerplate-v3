
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main';
import { BrowserRouter } from "react-router-dom";

//connects to html and loads it in app 
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode> 
    <BrowserRouter> 
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
)
// routes in app will go in browser router so it can take every route and load it since we give it access from our import. 