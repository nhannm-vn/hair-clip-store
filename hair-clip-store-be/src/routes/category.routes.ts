import { Router } from 'express'
import { deleteCategory, getCategories, getProductsByCategory } from '../controllers/category.controller'

const router = Router()

// GET /api/v1/categories
router.get('/', getCategories)

// DELETE /api/v1/categories/:id
router.delete('/:id', deleteCategory)

// GET /api/v1/categories/:id/products
router.get('/:id/products', getProductsByCategory)

export default router
