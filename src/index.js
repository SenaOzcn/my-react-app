import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol};
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

const root = ReactDOM. createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow"/>);

reportWebVitals();
