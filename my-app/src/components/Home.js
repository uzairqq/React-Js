import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initiallAge,
            homeLink: "Changed Link of Header"
        }
    };

    onChangeLink() {
        this.props.changeLink(this.state.homeLink());
    }

    MakeMeOld = () => {
        this.setState({
            age: this.state.age + 3
        })
    }
    setTimeout = (() => {
        this.setState({
            age: 2222
        })
    }, 1000);

    render() {
        return (
            <div>
                Name:{this.props.name}
                <br />
                Age:{this.state.age}
                <br />
                <hr />
                <button className="btn btn-primary" onClick={() => this.MakeMeOld()}>Make Me Older</button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary">Greet me</button>
                <hr />
                <button onClick={this.onChangeLink.bind(this)} class="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}

export default Home;