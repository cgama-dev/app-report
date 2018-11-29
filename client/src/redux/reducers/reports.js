import { Types } from './../actionsCreators'

import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    data: [],
    report:{},
    isLoading: false,
    isRedirect: false,
    isReport: false,
    isRendering:false,
    error: false
}

export const getReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        isRedirect: false
    }
}

export const getReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: false
    }
}

export const getReportFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const getReportsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        isReport: false
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
        isRendering: false, 
        isRedirect: false,
        isReport: false
        
    }
}

export const createReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: false,
        isRedirect: true,
        isRendering: false,
        isReport: false
    }
}

export const createReportFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const updateReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: true,
        isRedirect: false
    }
}

export const updateReportSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: false,
        isRendering: false
    }
}

export const updateReportFailure  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const generateReportRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        report: action.report,
        isLoading: true,
        isRendering: true,
        isRedirect: false
    }
}

export const generateReportSuccess = (state = INITIAL_STATE, action) => {
    console.log(action)
    return {
        ...state,
        isReport: action.report,
        isLoading: false,
        isRendering: false
    }
}

export const generateReportFailure  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true
    }
}

export const HANDLERS = {
    
    [Types.GET_REPORT_REQUEST]: getReportRequest,
    [Types.GET_REPORT_SUCCESS]: getReportSuccess,
    [Types.GET_REPORT_FAILURE]: getReportFailure,

    [Types.GET_REPORTS_REQUEST]: getReportsRequest,
    [Types.GET_REPORTS_SUCCESS]: getReportsSuccess,
    [Types.GET_REPORTS_FAILURE]: getReportsFailure,

    [Types.CREATE_REPORT_REQUEST]: createReportRequest,
    [Types.CREATE_REPORT_SUCCESS]: createReportSuccess,
    [Types.CREATE_REPORT_FAILURE]: createReportFailure,

    [Types.UPDATE_REPORT_REQUEST]: updateReportRequest,
    [Types.UPDATE_REPORT_SUCCESS]: updateReportSuccess,
    [Types.UPDATE_REPORT_FAILURE]: updateReportFailure,

    [Types.GENERATE_REPORT_REQUEST]: generateReportRequest,
    [Types.GENERATE_REPORT_SUCCESS]: generateReportSuccess,
    [Types.GENERATE_REPORT_FAILURE]: generateReportFailure

}

export default createReducer(INITIAL_STATE, HANDLERS)