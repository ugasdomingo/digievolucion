//Import tools
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

//Interface for JWT handdle

interface JwtPayload {
    uid: string;
}

declare global {
    namespace Express {
        interface Request {
            uid: string; // Agrega tu propiedad personalizada aquí
        }
    }
}

// Create User Auth Middleware
export const userAuth = async (req: any, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res
                .status(401)
                .json({ message: 'Debes hacer login para ver esta página' });
        }

        token = token.split(' ')[1];

        const { uid } = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;
        req.uid = uid;

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
