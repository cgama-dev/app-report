import express from 'express'

import  ReportController from '../controllers/report.controller'

const controller  = ReportController()

const router = express.Router()

router.get('/', controller.query)
router.get('/:id', controller.get)
router.post('/create', controller.create)
router.put('/:id', controller.update)

export default router
