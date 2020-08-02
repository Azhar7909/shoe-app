import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProductScreen from '../screens/ProductScreen';
import AppHeader from '../components/AppHeader';
import ProductItemScreen from '../screens/ProductItemScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

export default function Routes() {
    return (
        <div>
            <Router>
                <AppHeader />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route  path="/AboutScreen" component={AboutScreen} />
                    <Route exact path="/ProductScreen" component={ProductScreen} />
                    <Route  path="/ProductItemScreen/:id" component={ProductItemScreen} />
                    <Route  path="*" component={NotFoundScreen} />
                </Switch>
            </Router>
        </div>
    )
}
