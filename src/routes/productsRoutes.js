import {Router} from 'express';
import * as productsController from '../controllers/productsController';
import { verifyToken } from '../middlewares/authToken';


const router = Router();
//verifica el token primero y luego realiza el crud
router.post('/',verifyToken , productsController.createProduct);
router.get('/', verifyToken, productsController.getProducts);
router.get('/:productId', verifyToken, productsController.getProductById);
router.put('/:productId', verifyToken, productsController.updateProductById);
router.delete('/:productId', verifyToken, productsController.deleteProductById);

export default router;