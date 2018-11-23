import ActionsCreators from './../actionsCreators'

import { put } from 'redux-saga/effects'

import axios from 'axios'

export function* getReports() {

    const data = yield axios.get('/reports')

    yield put(ActionsCreators.getReportsSuccess(data.data.reports))
}

export function* createReport(action) {
    
    let report = action.report;
    
    const data = yield axios.post('/reports/create', report)
    
    yield put(ActionsCreators.createReportSuccess(data.data))

}