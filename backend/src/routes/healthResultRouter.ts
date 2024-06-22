//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import { userAuth } from '../middlewares/userAuth';
import {
    getAllHealthResults,
    getOneHealthResultByAdmin,
    getOneHealthResultByUser,
    updateHealthResult,
    deleteHealthResult,
} from '../controllers/healthResultControllers';

//Define router
const healthResultRouter = Router();

//Routes
healthResultRouter.get('/', adminAuth, getAllHealthResults);

healthResultRouter.get('/admin/:uid', adminAuth, getOneHealthResultByAdmin);

healthResultRouter.get('/user', userAuth, getOneHealthResultByUser);

healthResultRouter.put('/:uid', userAuth, updateHealthResult);

healthResultRouter.delete('/:uid', adminAuth, deleteHealthResult);

//Export
export default healthResultRouter;
