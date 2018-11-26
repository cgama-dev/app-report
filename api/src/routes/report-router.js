import express from 'express'

import ReportController from '../controllers/report.controller'

const routeReport = (jsreport) => {

    const router = express.Router()

    const controller = ReportController(jsreport)

    router.get('/', controller.query)
    router.get('/:id', controller.get)
    router.post('/', controller.create)
    router.post('/run/:id', controller.run)
    router.put('/:id', controller.update)

    return router
}

export default routeReport
