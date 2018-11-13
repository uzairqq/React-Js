import React from 'react';
import classes from '../Cockpit/cockpit.css';


const cockpit = (props) => {
    let btnClass = '';

    let styleClases = [];
    if (props.showPerson) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        styleClases.push(classes.red);
    }
    if (props.persons.length <= 1) {
        styleClases.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am React app</h1>
            <p className={styleClases.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Here</button>
        </div>
    )
}

export default cockpit;