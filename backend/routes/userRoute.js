import express from 'express'
import { loginUser, logout, RegisterUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/register').post(RegisterUser)
router.route('/login').post(loginUser)
router.route("/logout").get(logout)

export default router