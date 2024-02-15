//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import { userOrAdminAuth } from '../middlewares/userOrAdminAuth';
import { userAuth } from '../middlewares/userAuth';
import {
    getAllQuotes,
    getOneQuote,
    createQuote,
    updateQuote,
    deleteQuote,
} from '../controllers/quoteControllers';

//Define router
const quoteRouter = Router();

//Routes
quoteRouter.get('/', adminAuth, getAllQuotes);
quoteRouter.get('/:id', userOrAdminAuth, getOneQuote);
quoteRouter.post('/', userAuth, createQuote);
quoteRouter.put('/:id', adminAuth, updateQuote);
quoteRouter.delete('/:id', adminAuth, deleteQuote);

//Export
export default quoteRouter;
