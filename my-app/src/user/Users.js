import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            { name: "uzair", age: 20 },
            { name: "laraib", age: 30 },
            { name: "ashar", age: 40 },
            { name: "junaid", age: 50 },
            { name: "sarmad", age: 60 },
            { name: "khalil", age: 100 },
        ],
        title: "Users List"
    };
    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 5;
            return tempUser;
        });
        this.setState({
            newState
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make Us 5 Years Younger</button>
                <br />
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <User> Name:{user.name} Age:{user.age}</User>
                    })
                }
            </div >

        );
    }
}

export default Users;