import React from 'react';
import Popular from '../components/popular'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from '../components/nav';
class App extends React.Component {
    render() {
        return (
            <Router >
                <div className="container">
                    <Nav />
                    <Route path="/popular" component={Popular} />
                    <Route path="/battle" component={Popular} />

                </div>
            </Router>
        )
    }
}

export default App;