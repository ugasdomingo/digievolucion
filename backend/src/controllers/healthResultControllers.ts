//Import tools
import { Request, Response } from 'express';
import { calculateHealth } from '../helpers/calculateHealth';
import { HealthResultModel, IHealthResult } from '../models/HealthResultModel';
import { IHealth } from '../models/HealthAnswersModel';

// Get All Health Results --> Line 16
// Get One Health Result by Admin --> Line 32
// Get One Health Result by User --> Line 32
// Create  Health Result --> Line 48
// Update  Health Result --> Line 71
// Delete  Health Result --> Line 94

declare global {
    namespace Express {
        interface Request {
            uid: string;
        }
    }
}

// Get All Health Results
export const getAllHealthResults = async (req: Request, res: Response) => {
    try {
        const healthResults: IHealthResult[] = await HealthResultModel.find();

        return res.status(200).json({ healthResults });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: 'Something went wrong getting all results' });
    }
};

// Get Health Result by Admin
export const getOneHealthResultByAdmin = async (
    req: Request,
    res: Response
) => {
    try {
        const { uid } = req.params;
        const healthResult: IHealthResult | null =
            await HealthResultModel.findOne({ uid });

        if (!healthResult) {
            return res.status(404).json({ message: 'Health Result not found' });
        }

        return res.status(200).json({ healthResult });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: 'Something went wrong getting one result' });
    }
};

// Get Health Result by User
export const getOneHealthResultByUser = async (req: Request, res: Response) => {
    try {
        const uid = req.uid;
        const healthResult: IHealthResult | null =
            await HealthResultModel.findOne({ uid });

        if (!healthResult) {
            return res.status(404).json({ message: 'Health Result not found' });
        }

        return res.status(200).json({ healthResult });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: 'Something went wrong getting one result' });
    }
};

// Create Health Result
export const createHealthResult = async (health: IHealth) => {
    try {
        const automaticResult = calculateHealth(health);

        const healthResult: IHealthResult = new HealthResultModel({
            uid: health.uid,
            automaticResult,
        });

        await healthResult.save();

        return healthResult;
    } catch (error) {
        console.log(error);
    }
};

// Update Health Result
export const updateHealthResult = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { expertResult } = req.body;

        const healthResult: IHealthResult | null =
            await HealthResultModel.findByIdAndUpdate(
                id,
                { expertResult },
                { new: true }
            );

        if (!healthResult) {
            return res.status(404).json({ message: 'Health Result not found' });
        }

        return res.status(200).json({ healthResult });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: 'Something went wrong updating result' });
    }
};

// Delete Health Result
export const deleteHealthResult = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const healthResult: IHealthResult | null =
            await HealthResultModel.findByIdAndDelete(id);

        if (!healthResult) {
            return res.status(404).json({ message: 'Health Result not found' });
        }

        return res.status(200).json({ healthResult });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: 'Something went wrong deleting result' });
    }
};
