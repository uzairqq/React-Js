import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    MakeMeOld() {
        this.age += 3;
        console.log(this.age);

    }
    render() {
        return (
            <div>
                Name:{this.props.name}
                <br />
                Age:{this.props.age}
                <br />
                <hr />
                <button onClick={() => this.MakeMeOld()}>Make Me Older</button>
            </div>
        )
    }
}

export default Home;