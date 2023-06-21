import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);

reportWebVitals();
