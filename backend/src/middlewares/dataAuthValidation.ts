//Import tools
import { body } from 'express-validator';
import { errorAuthValidation } from './errorAuthValidation';

//Define validations
export const dataAuthValidation = [
    body('email', 'Formato email incorrecto').trim().isEmail().normalizeEmail(),
    body('password', 'Mínimo 6 caracteres ').isLength({ min: 6 }),
    errorAuthValidation,
];
