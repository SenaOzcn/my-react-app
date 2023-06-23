import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './Car.js';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myHeader;
        if (this.state.show) {
            myHeader = <Child />;
        };
        return (
            <div>
                {myHeader}
                <button type="button" onClick={this.delHeader}>DeleteHeader</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert('The component named Header is about to be unmounted.');
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);

reportWebVitals();
