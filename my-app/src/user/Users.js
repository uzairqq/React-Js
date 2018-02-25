import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <User>uzair</User>
                <User>laraib</User>
                <User>ashar</User>
            </div>

        );
    }
}

export default Users;