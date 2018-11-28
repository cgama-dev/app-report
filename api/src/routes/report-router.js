import express from 'express'

import ReportController from '../controllers/report.controller'

const routeReport = () => {

    const router = express.Router()

    const controller = ReportController()

    router.get('/', controller.query)
    router.get('/:id', controller.get)
    router.post('/', controller.create)
    router.post('/report/generate', controller.generate)
    router.put('/:id', controller.update)

    return router
}

export default routeReport
