import { all } from "redux-saga/effects";
import watchCount from './countSaga';

export const rootSaga = function*() {
    yield all([
        watchCount()
    ]);
};
