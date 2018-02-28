import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <User age="29">Uzair</User>
                <User age="30">laraib</User>
                <User age="25">ashar</User>
            </div>

        );
    }
}

export default Users;