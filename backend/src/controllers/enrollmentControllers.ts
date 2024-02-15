//Import tools
import { Request, Response } from 'express';
import { EnrollmentModel, IEnrollment } from '../models/EnrollmentModel';

// Get All Enrollments --> Line 16
// Get One Enrollment --> Line 32
// Create  Enrollment --> Line 48
// Update  Enrollment --> Line 71
// Delete  Enrollment --> Line 94

declare global {
    namespace Express {
        interface Request {
            uid: string; // Agrega tu propiedad personalizada aquí
        }
    }
}

// Get All Enrollments
export const getAllEnrollments = async (req: Request, res: Response) => {
    try {
        const enrollments: IEnrollment[] = await EnrollmentModel.find();

        return res.status(200).json({ enrollments });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Enrollment
export const getOneEnrollment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const enrollment: IEnrollment | null = await EnrollmentModel.findById(
            id
        );

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        return res.status(200).json({ enrollment });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Create Enrollment
export const createEnrollment = async (req: Request, res: Response) => {
    try {
        const uid = req.uid;
        const { cid, status, message, politiquesAccepted } = req.body;
        const enrollment: IEnrollment = new EnrollmentModel({
            uid,
            cid,
            status,
            message,
            politiquesAccepted,
        });
        await enrollment.save();

        return res.status(201).json({ enrollment });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Enrollment
export const updateEnrollment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const enrollment: IEnrollment | null =
            await EnrollmentModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        return res.status(200).json({ enrollment });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete Enrollment
export const deleteEnrollment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const enrollment: IEnrollment | null =
            await EnrollmentModel.findByIdAndDelete(id);

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        return res.status(200).json({ message: 'Enrollment deleted' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
