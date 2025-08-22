import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Page</h1>
                <Link to="/app">App</Link> <br></br>
                <Link to="/myapp">Myapp</Link>
            </div>
        );
    }
}

export default Welcome;
