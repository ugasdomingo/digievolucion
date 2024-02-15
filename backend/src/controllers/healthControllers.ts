//Import tools
import { Request, Response } from 'express';
import { HealthModel, IHealth } from '../models/HealthAnswersModel';
import { createHealthResult } from './healthResultControllers';

// Get All Healths --> Line 16
// Get One Health --> Line 32
// Create  Health --> Line 48
// Update  Health --> Line 71
// Delete  Health --> Line 94

declare global {
    namespace Express {
        interface Request {
            uid: string; // Agrega tu propiedad personalizada aquí
        }
    }
}

// Get All Healths
export const getAllHealths = async (req: Request, res: Response) => {
    try {
        const healths: IHealth[] = await HealthModel.find();

        return res.status(200).json({ healths });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Health
export const getOneHealth = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const health: IHealth | null = await HealthModel.findById(id);

        if (!health) {
            return res.status(404).json({ message: 'Health not found' });
        }

        return res.status(200).json({ health });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Create Health
export const createHealth = async (req: Request, res: Response) => {
    try {
        const uid = req.uid;
        const health = new HealthModel(req.body);
        health.uid = uid;

        await health.save();

        const healthResult = await createHealthResult(health);

        return res.status(201).json({ healthResult });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Health
export const updateHealth = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const health: IHealth | null = await HealthModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!health) {
            return res.status(404).json({ message: 'Health not found' });
        }

        return res.status(200).json({ health });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete Health
export const deleteHealth = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const health: IHealth | null = await HealthModel.findByIdAndDelete(id);

        if (!health) {
            return res.status(404).json({ message: 'Health not found' });
        }

        return res.status(200).json({ message: 'Health deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
