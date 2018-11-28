import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

    //Projects
    getReportRequest: ['report'],
    getReportSuccess: ['report'],
    getReportFailure: null,

    getReportsRequest: null,
    getReportsSuccess: ['reports'],
    getReportsFailure: null,

    createReportRequest: ['report'],
    createReportSuccess: ['report'],
    createReportFailure: null,

    updateReportRequest: ['report'],
    updateReportSuccess: ['report'],
    updateReportFailure: null,

    generateReportRequest: ['report'],
    generateReportSuccess: ['report'],
    generateReportFailure: null
})

export default Creators