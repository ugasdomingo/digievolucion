//Import tools
import { Router } from 'express';
import { dataAuthValidation } from '../middlewares/dataAuthValidation';
import { register, login, refresh } from '../controllers/userControllers';

//Define router
const userRouter = Router();

//Routes
userRouter.post('/register', dataAuthValidation, register);
userRouter.post('/login', dataAuthValidation, login);
userRouter.post('/refresh', refresh);

//Export
export default userRouter;
