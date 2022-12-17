import express from 'express';
import asyncHandler from 'express-async-handler';

import { getAllProducts, postAllProducts } from '../controllers/productController';

const ProductRouter = express.Router();

ProductRouter.post('/products', asyncHandler(postAllProducts));

ProductRouter.get('/products', asyncHandler(getAllProducts));

export default ProductRouter;
