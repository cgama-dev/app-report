import { Types } from './../actionsCreators'

import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    data: [],
    report:{},
    isLoading: false,
    isRedirect: false,
    error: false
}

export const getReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        isRedirect: false
    }
}

export const getReportsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}

export const getReportsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: action.reports,
        isLoading: false
    }
}

export const getReportsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const createReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        isRedirect: false
    }
}

export const createReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: false,
        isRedirect: true
    }
}

export const createReportFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const saveReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        isRedirect: false
    }
}

export const saveReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: false,
        isRedirect: true
    }
}

export const saveReportFailure  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const HANDLERS = {
    [Types.GET_REPORT_REQUEST]: getReportRequest,

    [Types.GET_REPORTS_REQUEST]: getReportsRequest,
    [Types.GET_REPORTS_SUCCESS]: getReportsSuccess,
    [Types.GET_REPORTS_FAILURE]: getReportsFailure,

    [Types.CREATE_REPORT_REQUEST]: createReportRequest,
    [Types.CREATE_REPORT_SUCCESS]: createReportSuccess,
    [Types.CREATE_REPORT_FAILURE]: createReportFailure,

    [Types.SAVE_REPORT_REQUEST]: saveReportRequest,
    [Types.SAVE_REPORT_SUCCESS]: saveReportSuccess,
    [Types.SAVE_REPORT_FAILURE]: saveReportFailure

}

export default createReducer(INITIAL_STATE, HANDLERS)