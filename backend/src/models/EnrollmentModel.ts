//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Enrollment Schema
const enrollmentSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        cid: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
            required: true,
        },
        status: {
            type: String,
            default: 'pending',
        },
        message: {
            type: String,
        },
        politiquesAccepted: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

//Export Interface IEnrollment
export interface IEnrollment extends Document {
    uid: string;
    cid: string;
    status: string;
    message: string;
    politiquesAccepted: boolean;
    createdAt: string;
    updatedAt: string;
}

//Export Enrollment Model
export const EnrollmentModel = model<IEnrollment>(
    'Enrollment',
    enrollmentSchema
);
