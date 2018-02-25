import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.justANumber}</h2>
                <User name="pasha" age="25">uzair</User>
                <User age="30">laraib</User>
                <User age="40">ashar</User>
            </div>

        );
    }
}

export default Users;