import { Types } from './../actionsCreators'

import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    data: [],
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
        error: false
    }
}

export const HANDLERS = {
    [Types.GET_PROJECTS_REQUEST]: getProjectsRequest,
    [Types.GET_PROJECTS_SUCCESS]: getProjectsSuccess,
    [Types.GET_PROJECTS_FAILURE]: getProjectsFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)