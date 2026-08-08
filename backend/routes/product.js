import express from 'express'
import { getAllProducts } from '../controllers/product'

const router = express.Router()

router.route('/products').get(getAllProducts)

export default router