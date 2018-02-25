import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User>uzair</User>
                <User>laraib</User>
                <User>ashar</User>
            </div>

        );
    }
}

export default Users;