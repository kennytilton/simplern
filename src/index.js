import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HelloWorld from './App';
// import reportWebVitals from './reportWebVitals';
import Cells from '@kennytilton/cells';
import Model from '@kennytilton/model';

window.ract = React;
window.rdom = ReactDOM;
window.cells = Cells;
window.model = Model;

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);


