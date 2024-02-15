//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import { userAuth } from '../middlewares/userAuth';
import { userOrAdminAuth } from '../middlewares/userOrAdminAuth';
import {
    getAllHealths,
    getOneHealth,
    createHealth,
    updateHealth,
    deleteHealth,
} from '../controllers/healthControllers';

//Define router
const healthRouter = Router();

//Routes
healthRouter.get('/', adminAuth, getAllHealths);
healthRouter.get('/:id', userOrAdminAuth, getOneHealth);
healthRouter.post('/', userAuth, createHealth);
healthRouter.put('/:id', adminAuth, updateHealth);
healthRouter.delete('/:id', adminAuth, deleteHealth);

//Export
export default healthRouter;
