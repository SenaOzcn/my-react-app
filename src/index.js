import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>
}

function Garage() {
  const carInfo= {
    name: "Ford",
    model: "Mustang"
  };
  return(
    <>
      <h1>Who lives is my Garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

reportWebVitals();
