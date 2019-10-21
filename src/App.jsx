
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

const renderApplication = () => {
  ReactDOM.render(
    <Home /> ,
    document.querySelector('#root')
  );
}

renderApplication();