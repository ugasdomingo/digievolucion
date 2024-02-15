//Import tools
import { Request, Response } from 'express';
import { UserModel, IUser } from '../models/UserModel';
import { generateRefreshToken, generateToken } from '../utils/tokenManager';
import jwt from 'jsonwebtoken';

// Register --> Line 16
// Login --> Line 61
// Refresh --> Line 91
// Logout --> Line 125

const expiresIn = 60 * 60 * 24 * 7; // 7 days

// Register
export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone, politiquesAccepted } = req.body;

        // Check if user exists
        const user: IUser | null = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password,
            phone,
            politiquesAccepted,
        });

        // Save user
        await newUser.save();

        //Generate Token & RefreshToken
        const refreshToken = generateRefreshToken(newUser.id);
        const response = {
            ...generateToken(newUser.id),
            role: newUser.role,
            name: newUser.name,
            refreshToken,
        };

        return res.status(200).json({
            message: 'User created successfully',
            response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Login
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user: IUser | null = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //Generate Token & RefreshToken
        const refreshToken = generateRefreshToken(user.id);
        const response = {
            ...generateToken(user.id),
            role: user.role,
            name: user.name,
            refreshToken,
        };

        return res.status(200).json({
            message: 'User logged successfully',
            response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Refresh
export const refresh = async (req: Request, res: Response) => {
    try {
        let refreshTokenCookie = req.headers.authorization;
        refreshTokenCookie = refreshTokenCookie?.split(' ')[1];

        // Check if token exists
        if (!refreshTokenCookie) {
            return res.status(400).json({ message: 'Login to see this page ' });
        }

        // Check if token is valid
        jwt.verify(
            refreshTokenCookie,
            process.env.JWT_REFRESH as string,
            (err: any, uid: any) => {
                if (err) {
                    return res.status(400).json({ message: 'Invalid token' });
                }

                //Generate Token & RefreshToken
                const newRefreshToken = generateRefreshToken(uid);
                const response = {
                    ...generateToken(uid),
                    refreshToken: newRefreshToken,
                };

                return res.status(200).json({
                    message: 'Token refreshed successfully',
                    response,
                });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
