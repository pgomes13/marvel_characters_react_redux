import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import  {
    configureStore,
    Routes,
    registerServiceWorker
} from './map';

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={hist}>
            <Switch>
                {Routes.map((route, key) => {
                    return <Route path={route.path} component={route.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();


