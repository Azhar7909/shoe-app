import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from '../screens/HomeScreen';

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                </Switch>
            </Router>
        </div>
    )
}
