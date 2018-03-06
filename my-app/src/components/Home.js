import React from 'react';

class Home extends React.Component {

    render() {
        var sports = this.props.hobby
        var namesList = sports.map(function (name) {
            return <li>{name}</li>;
        })
        console.log(this.props)
        return (
            <div>
                Name:{this.props.name}
                <br />
                Age:{this.props.age}
                <br />
                Hobbies:{namesList}
                <br />
                <p>In a new component! yaay</p>
            </div>
        )
    }
}

export default Home;