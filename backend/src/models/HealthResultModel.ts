//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Health Schema
const healthResultSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
       testResult: {
            type: Number,
            required: true,
        },
        testAnswers: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

//Interface for Health Result
export interface IHealthResult extends Document {
    uid: string;
    testResult: number;
    testAnswers: object;
    createdAt: Date;
    updatedAt: Date;
}

//Export Health Result Model
export const HealthResultModel = model<IHealthResult>(
    'HealthResult',
    healthResultSchema
);
