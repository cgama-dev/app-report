import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

    //Projects
    getProjectsRequest: null,
    getProjectsSuccess: ['projects'],
    getProjectsFailure: null
})


export default Creators