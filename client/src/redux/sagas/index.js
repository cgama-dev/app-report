import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

import { getProjects, createReport } from './projects'

export default function* rootSagas() {
    yield takeLatest(Types.GET_PROJECTS_REQUEST, getProjects)
    yield takeLatest(Types.CREATE_REPORT_REQUEST, createReport)
}