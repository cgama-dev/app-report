import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

    //Projects
    getReportRequest: null,

    getReportsRequest: null,
    getReportsSuccess: ['projects'],
    getReportsFailure: null,

    createReportRequest: ['project'],
    createReportSuccess: ['project'],
    createReportFailure:null,

    saveReportRequest: null ,
    saveReportSuccess: ['project'],
    saveReportFailure:null
})

export default Creators