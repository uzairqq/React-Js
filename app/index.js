import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import propTypes from 'prop-types'

class App extends Component {
    render() {

        var friend = this.props.list.filter(function (user) {
            return user.friend === true
        });
        var nonFriend = this.props.list.filter((user) => {
            return user.friend === false
        });
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is also your friend*/}
                    {friend.map(function (user) {
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is NOT your friend*/}
                    {nonFriend.map(function (user) {
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
App.propTypes = {
    list: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string.isRequired,
        friend: propTypes.bool.isRequired
    }))
}
ReactDOM.render(<App
    list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false }]}

/>, document.getElementById('app'));