//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import { userOrAdminAuth } from '../middlewares/userOrAdminAuth';
import { userAuth } from '../middlewares/userAuth';
import {
    getAllEnrollments,
    getOneEnrollment,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment,
} from '../controllers/enrollmentControllers';

//Define router
const enrollmentRouter = Router();

//Routes
enrollmentRouter.get('/', adminAuth, getAllEnrollments);
enrollmentRouter.get('/:id', userOrAdminAuth, getOneEnrollment);
enrollmentRouter.post('/', userAuth, createEnrollment);
enrollmentRouter.put('/:id', adminAuth, updateEnrollment);
enrollmentRouter.delete('/:id', adminAuth, deleteEnrollment);

//Export
export default enrollmentRouter;
