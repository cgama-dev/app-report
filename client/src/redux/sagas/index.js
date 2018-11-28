import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

import { getReport, getReports, createReport, updateReport } from './projects'

export default function* rootSagas() {
    yield takeLatest(Types.GET_REPORTS_REQUEST, getReports)
    yield takeLatest(Types.GET_REPORT_REQUEST, getReport)
    yield takeLatest(Types.CREATE_REPORT_REQUEST, createReport)
    yield takeLatest(Types.UPDATE_REPORT_REQUEST, updateReport)
}