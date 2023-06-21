import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <h2>Hi, I am a {this.state.color} Car!</h2>
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);

reportWebVitals();
