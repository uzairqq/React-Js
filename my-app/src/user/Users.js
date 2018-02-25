import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

        );
    }
}

export default Users;