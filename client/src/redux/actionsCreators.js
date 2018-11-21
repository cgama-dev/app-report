import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

    //Projects
    getProjectsRequest: null,
    getProjectsSuccess: ['projects'],
    getProjectsFailure: null,

    createReportRequest: ['project'],
    createReportSuccess: ['project'],
    createReportFailure:null
})

export default Creators