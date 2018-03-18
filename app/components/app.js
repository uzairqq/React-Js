import React from 'react';
import Popular from '../components/popular'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router >
                <div className="container">
                    <Route path="/popular" Component={Popular} />
                </div>
            </Router>
        )
    }
}

export default App;