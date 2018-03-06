import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initiallAge

        }
    }

    MakeMeOld = () => {
        this.setState({
            age: this.state.age += 1
        })
    }
    render() {
        return (
            <div>
                Name:{this.props.name}
                <br />
                Age:{this.state.age}
                <br />
                <hr />
                <button className="btn btn-primary" onClick={() => this.MakeMeOld()}>Make Me Older</button>
            </div>
        )
    }
}

export default Home;