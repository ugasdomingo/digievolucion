//Import tools
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

//Define validations
export const errorAuthValidation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(422)
            .json({ message: 'Invalid data', errors: errors.array() });
    }

    next();
};
