import React from 'react';
import cssPerson from './Person.css';


const person = (props) => {

    return (

        <div className={cssPerson.Person}>
            <p onClick={props.deletePerson} >I'm a {props.name} and i am {props.age} years old And My{props.children}</p>
            Name:<input type="text" onChange={props.changedName} value={props.name} />
        </div>
    )
}

export default person;