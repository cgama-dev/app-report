import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

    //Projects
    getReportRequest: null,

    getReportsRequest: null,
    getReportsSuccess: ['reports'],
    getReportsFailure: null,

    createReportRequest: ['report'],
    createReportSuccess: ['report'],
    createReportFailure:null,

    saveReportRequest: null ,
    saveReportSuccess: ['report'],
    saveReportFailure:null
})

export default Creators