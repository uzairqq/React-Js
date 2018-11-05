import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.methodClick} >I'm a {props.name} and i am {props.age} years old And My{props.children}</p>
            Name:<input type="text" onChange={props.changedName} value={props.name} />
        </div>
    )
}

export default person;