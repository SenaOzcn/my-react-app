import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'red'};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'green'})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        document.getElementById('div1').innerHTML = 'Before the update, the favorite was ' + prevState.favoriteColor;
    }
    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 'The updated favorite is ' + this.state.favoriteColor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <div id='div1'></div>
                <div id='div2'></div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

reportWebVitals();
