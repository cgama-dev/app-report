import express from 'express'

import  ReportController from '../controllers/report.controller'

const controller  = ReportController()

const router = express.Router()

router.get('/', controller.query)
router.get('/report/:id', controller.get)
router.post('/report', controller.create)
router.put('/report', controller.update)

export default router