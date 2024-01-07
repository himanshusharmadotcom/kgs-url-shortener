import express from 'express'
import { shortController } from '../controllers/service.controller.js'

const router = express.Router()

router.post('/short', shortController)

export default router