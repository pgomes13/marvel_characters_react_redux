import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState = Map()) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware))
    );

    return store;
};