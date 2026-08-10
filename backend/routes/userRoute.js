import express from 'express'
import { loginUser, RegisterUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/register').post(RegisterUser)
router.route('/login').post(loginUser)

export default router