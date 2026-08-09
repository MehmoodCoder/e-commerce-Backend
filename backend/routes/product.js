import express from 'express'
import { getAllProducts } from '../controllers/product.js'

const router = express.Router()

router.route('/products').get(getAllProducts)

export default router