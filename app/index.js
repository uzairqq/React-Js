import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}
                    alt='Avatar'
                    style={{ width: 100, height: 100 }} />
                <h1>Name:{this.props.name}</h1>
                <h3>UserName:{this.props.username}</h3>
            </div>
        )
    }
}
App.PropTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}



ReactDOM.render(<App
    name="Uzair Iqbal"
    username="tyler"
    img={'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}
/>, document.getElementById('app'));