import React from 'react';
import Popular from '../components/popular'

class App extends React.Component {
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Python', 'CSS', 'Java', 'Asp.Net'];
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

export default App;