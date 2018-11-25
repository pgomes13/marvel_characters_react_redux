import { all, call } from 'redux-saga/effects';

import watchGetCharacters from './watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* () {
    yield all([
        call(watchGetCharacters)
    ]);
};