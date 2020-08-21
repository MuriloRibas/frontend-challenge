import React from 'react'
import LoginPage from './pages/login/index';
import HomePage from './pages/home/index';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const Routes: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/home" component={HomePage}/>
            </Switch>
        </Router>
    )
} 

export default Routes