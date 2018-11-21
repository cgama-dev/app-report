import { Types } from './../actionsCreators'

import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    data: [],
    project:{},
    isLoading: false,
    error: false
}

export const getProjectsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getProjectsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: action.projects,
        isLoading: false
    }
}
export const getProjectsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const createReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}

export const createReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        project: action.project,
        isLoading: false
    }
}

export const createReportFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const HANDLERS = {
    [Types.GET_PROJECTS_REQUEST]: getProjectsRequest,
    [Types.GET_PROJECTS_SUCCESS]: getProjectsSuccess,
    [Types.GET_PROJECTS_FAILURE]: getProjectsFailure,

    [Types.CREATE_REPORT_REQUEST]: createReportRequest,
    [Types.CREATE_REPORT_SUCCESS]: createReportSuccess,
    [Types.CREATE_REPORT_FAILURE]: createReportFailure


}

export default createReducer(INITIAL_STATE, HANDLERS)