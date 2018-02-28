import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            { name: "uzair", age: 20 },
            { name: "laraib", age: 30 },
            { name: "ashar", age: 40 }
        ],
        title: "Users List"
    };
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            </div>

        );
    }
}

export default Users;