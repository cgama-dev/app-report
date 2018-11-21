import ActionsCreators from './../actionsCreators'

import { put } from 'redux-saga/effects'

export function* getProjects(axios) {
    
    const projects = yield axios.get('http://localhost:8000/all-projects')

    yield put(ActionsCreators.getProjectsSuccess(projects.data.data))
}