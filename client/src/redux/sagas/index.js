import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

import { getReport, getReports, createReport, updateReport, generateReport } from './reports'

export default function* rootSagas() {
    yield takeLatest(Types.GET_REPORTS_REQUEST, getReports)
    yield takeLatest(Types.GET_REPORT_REQUEST, getReport)
    yield takeLatest(Types.CREATE_REPORT_REQUEST, createReport)
    yield takeLatest(Types.UPDATE_REPORT_REQUEST, updateReport)
    yield takeLatest(Types.GENERATE_REPORT_REQUEST, generateReport)
}