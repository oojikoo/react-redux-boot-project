import { put, delay, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { actions } from "./../actions";

const fetchBigAmount = function*() {
    const num = 15;
    yield delay(2000);
    yield put(actions.addBigAmount({ amount: num}));
};


export default function* watchCount() {
    yield takeLatest(getType(actions.fetchBigAmount), fetchBigAmount);
}
