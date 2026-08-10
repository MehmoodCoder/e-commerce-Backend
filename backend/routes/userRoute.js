import express from 'express'
import { RegisterUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/register').post(RegisterUser)

export default router