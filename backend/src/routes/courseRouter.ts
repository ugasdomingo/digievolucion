//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import {
    getAllCourses,
    getOneCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../controllers/courseControllers';

//Define router
const courseRouter = Router();

//Routes
courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getOneCourse);
courseRouter.post('/', adminAuth, createCourse);
courseRouter.put('/:id', adminAuth, updateCourse);
courseRouter.delete('/:id', adminAuth, deleteCourse);

//Export
export default courseRouter;
