//Import tools
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserModel, IUser } from '../models/UserModel';

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

// Create Admin Auth Middleware
export const adminAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Authorization denied' });
        }

        token = token.split(' ')[1];
        const { uid } = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;

        // Set uid in request
        req.uid = uid;

        const user: IUser | null = await UserModel.findById(uid);

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Token is not valid' });
        }

        // Check if user is admin
        if (user.role !== 'Admin') {
            return res.status(401).json({ message: 'Not authorized' });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
