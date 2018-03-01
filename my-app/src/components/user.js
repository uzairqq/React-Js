import React from 'react';

const user = (props) => {
    return <li>
        <span>Name:{props.children} || Age:{props.age}</span>
        <button onClick={props.deleteEvent}>Delete User</button>
    </li>
}

export default user;   