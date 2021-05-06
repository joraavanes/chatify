import React from 'react'
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Chat from './components/Chat'
import Join from './components/Join'

const App = () => {
    return (
        <div>
            <h1>Chatify</h1>
            <Router>
                <NavLink to="/">Join</NavLink>
                <br/>
                <NavLink to="/chat">Chat</NavLink>
                <Switch>
                    <Route path="/" component={Join} exact/>
                    <Route path="/chat" component={Chat} exact/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;