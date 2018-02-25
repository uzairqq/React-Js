import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.justANumber}</h2>
                <h3>{this.props.notANumber}</h3>
                <User gender="female"></User>
                <User age="30">laraib</User>
                <User gender="Female" age="40">ashar</User>
            </div>

        );
    }
}

export default Users;