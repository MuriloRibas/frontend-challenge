import React from 'react'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import LoginPage from './pages/login/index';
import HomePage from './pages/home/index';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { AuthI } from './store/content/auth/types';

const Routes: React.FC = () => {

    const authStoreTyped: TypedUseSelectorHook<AuthI> = useSelector;
    const authStore = authStoreTyped(state => state.Auth);

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <PrivateRoute exact path="/home" isSignedIn={authStore.isSignedIn} component={HomePage}/>
            </Switch>
        </Router>
    )
} 

export default Routes