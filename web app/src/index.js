import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.sass';

import store from './store';


const render = () => {
  ReactDOM.render( <BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
};

render();

store.subscribe(render);