import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/dropdown.js';
import states from './data/states.json';

ReactDOM.render(
  <div>
    <h2>States</h2>
    <Dropdown data={states} />
    <p><a href="index.html">Home</a></p>
  </div>,
  document.getElementById('states')
);
