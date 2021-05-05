import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>Chatify</h1>
            <Router>
                <Switch>
                    <Route path="/"/>
                    <Route path="chat"/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;