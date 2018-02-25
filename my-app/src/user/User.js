import React from 'react';

const User = (props) => {

    let age = props.age ? props.age : "NA";
    let gender = props.gender ? props.gender : "Not Checked";
    if (props.children) {
        return (< div > Name : {props.children} || Age: {age} || gender:{gender}</ div >)
    }
    else {
        return <div>Invalid Entry</div>
    }


}


export default User;


//