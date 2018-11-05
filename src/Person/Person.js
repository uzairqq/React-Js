import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.methodClick} >I'm a {props.name} and i am {props.age} years old And My{props.children}</p>
        </div>
    )
}

export default person;