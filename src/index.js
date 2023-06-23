import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'yellow'}
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'pink'})
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById('mydiv').innerHTML = 'The updated favorite is ' + this.state.favoriteColor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <div id="mydiv"></div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

reportWebVitals();
