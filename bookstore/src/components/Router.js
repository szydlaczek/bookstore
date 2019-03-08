import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import PageNotFound from "./PageNotFound";
import App from './App';

export default class Router extends React.Component {
    render() {
            return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route  path="/Admin" component={AdminPanel}/>
                    <Route exact component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
            )
    }
}