import React from 'react'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import configureStore from './store/store';
import Chat from './components/Chat'
import Join from './components/Join'
import H1 from './components/styled/h1.styled'

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

export default () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={Join} exact/>
                        <Route path="/chat" component={Chat} exact/>
                    </Switch>
                </Router>
            </Provider>
        </>
    );
};