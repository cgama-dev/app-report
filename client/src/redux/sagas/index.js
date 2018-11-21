import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

import { getReports, createReport } from './projects'

export default function* rootSagas() {
    yield takeLatest(Types.GET_REPORTS_REQUEST, getReports)
    yield takeLatest(Types.CREATE_REPORT_REQUEST, createReport)
}