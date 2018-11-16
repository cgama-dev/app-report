import ActionsCreators from './../actionsCreators'

import { put } from 'redux-saga/effects'

export function* getProjects() {

    yield put(ActionsCreators.getProjectsSuccess(["a","b"]))
}