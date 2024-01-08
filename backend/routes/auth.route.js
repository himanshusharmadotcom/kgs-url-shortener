import express from 'express'
import { signupController, signinController, signoutController } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signupController)
router.post('/signin', signinController)
router.get('/signout', signoutController)

export default router