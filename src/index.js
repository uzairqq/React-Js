//import the REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a React Component
const App = () => {
    return (
        <div>hi there</div>
    )
}

//Take the React Component and show it on the screen.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);