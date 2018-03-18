import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>GitHub Battle: Battle Your Friends... and stuff.</h1>
                <Link className='button-battle' to='/battles'>
                    Battle
                </Link>
            </div>
        )
    }
}

export default Home;    