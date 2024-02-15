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
        automaticResult: {
            type: String,
            required: true,
        },
        expertResult: {
            type: String,
            default:
                'En breve un experto revisará tu resultado y te dará un plan de acción personalizado.',
        },
    },
    {
        timestamps: true,
    }
);

//Interface for Health Result
export interface IHealthResult extends Document {
    uid: string;
    automaticResult: string;
    expertResult: string;
    createdAt: Date;
    updatedAt: Date;
}

//Export Health Result Model
export const HealthResultModel = model<IHealthResult>(
    'HealthResult',
    healthResultSchema
);
