import ActionsCreators from './../actionsCreators'

import { put } from 'redux-saga/effects'

import axios from 'axios'

export function* getReports() {

    const projects = yield axios.get('http://localhost:8000/all-projects')

    yield put(ActionsCreators.getReportsSuccess(projects.data.data))
}

export function* createReport(action) {
    
    let project = action.project;
    
    project = yield axios.post('http://localhost:8000/create-project', project)
    
    yield put(ActionsCreators.createReportSuccess(project.data.data))

}