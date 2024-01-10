import express from 'express'
import { shortController, allController, redirectController, deleteController } from '../controllers/service.controller.js'
import { verifyToken } from '../Utils/verifyUser.js'

const router = express.Router()

router.post('/short', shortController)
router.get('/all', allController)
router.get('/:urlId', redirectController)
router.delete('/delete/:urlId', deleteController)

export default router