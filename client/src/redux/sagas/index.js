import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actionsCreators'

import { getProjects } from './projects'

import axios from 'axios'

export default function* rootSagas() {
    yield takeLatest(Types.GET_PROJECTS_REQUEST, getProjects, axios)
}