import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement = <h1 className="myclass">Hello World!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

reportWebVitals();
