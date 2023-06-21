import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Car() {
    return <h2>I am a Car!</h2>;
}

function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

reportWebVitals();
