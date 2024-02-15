//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost,
} from '../controllers/postControllers';

//Define router
const postRouter = Router();

//Routes
postRouter.get('/', getAllPosts);
postRouter.get('/:id', getOnePost);
postRouter.post('/', adminAuth, createPost);
postRouter.put('/:id', adminAuth, updatePost);
postRouter.delete('/:id', adminAuth, deletePost);

//Export
export default postRouter;
