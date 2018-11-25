import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import  {
    configureStore,
    Routes,
    registerServiceWorker
} from './map';

import { HomeLayoutContainer } from './layouts';
import { Blog } from './views';

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={hist}>
            <Switch>
                { Routes.map((route, key) => {
                    if (route.redirect) {
                        return <Redirect exact from={route.path} to={route.to} key={key} />;
                    }
                    return <Route exact path={route.path} component={route.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();


