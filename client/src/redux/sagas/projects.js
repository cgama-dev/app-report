import ActionsCreators from './../actionsCreators'

import { put } from 'redux-saga/effects'

import axios from 'axios'

export function* getReports() {
    try {
        const data = yield axios.get('/reports')
        yield put(ActionsCreators.getReportsSuccess(data.data.reports))
    } catch (err) {
        yield put(ActionsCreators.getReportsFailure())
    }
}

export function* getReport(action) {

    try {
        const reportId = action.report;
        const data = yield axios.get('/reports/' + reportId)

        yield put(ActionsCreators.getReportSuccess(data.data))

    } catch (err) {    
        yield put(ActionsCreators.getReportFailure())
    }
}

export function* createReport(action) {

    let report = action.report;

    try {
        const data = yield axios.post('/reports', report)
        yield put(ActionsCreators.createReportSuccess(data.data))
    } catch (err) {
        yield put(ActionsCreators.createReportFailure())
    }
}