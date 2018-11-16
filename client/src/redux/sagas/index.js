import {takeLatest, put} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

export default function* rootSagas() {
    console.log("Root Sagas")
    // yield takeLatest(Types.GET_RUNS_REQUEST, getRuns)
}