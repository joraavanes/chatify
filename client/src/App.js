import React from 'react'
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Chat from './components/Chat'
import Join from './components/Join'
import H1 from './components/styled/h1.styled'

const App = () => {
    return (
        <>
            <H1>Chatify</H1>
            <Router>
                <Switch>
                    <Route path="/" component={Join} exact/>
                    <Route path="/chat" component={Chat} exact/>
                </Switch>
            </Router>
        </>
    );
};

export default App;