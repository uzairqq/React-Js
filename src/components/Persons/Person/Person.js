import React, { Component } from 'react';
import cssPerson from './Person.css';


class Person extends Component {
    render() {
        return <div className={cssPerson.Person}>
            <p onClick={this.props.deletePerson} >I'm a {this.props.name} and i am {this.props.age} years old And My{this.props.children}</p>
            Name:<input type="text" onChange={this.props.changedName} value={this.props.name} />
        </div>
    }
}
export default Person;