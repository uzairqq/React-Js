import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ProfilePic extends React.Component {
    render() {
        return (
            <div>
                <img src={'https://photo.fb.com/' + this.props.username} />
            </div>
        )
    }
}
class ProfileLink extends React.Component {
    render() {
        return (
            <div>
                <a href={'https://www.fb.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        )
    }
}
ReactDOM.render(<App username="uzairqq" />, document.getElementById('app'));