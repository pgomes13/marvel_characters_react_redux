import { all, call } from 'redux-saga/effects';

import watcher from './watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function as our root Saga.
export default function* () {
    yield all([
        call(watcher)
    ]);
};