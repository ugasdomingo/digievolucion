//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Health Schema
const healthSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        carousel: {
            type: Boolean,
        },
        shortVideos: {
            type: Boolean,
        },
        longVideos: {
            type: Boolean,
        },
        automation: {
            type: Boolean,
        },
        adsBudget: {
            type: Boolean,
        },
        kpis: {
            type: Boolean,
        },
        realCustomersCanal: {
            type: String,
        },
        realCustomersPercentage: {
            type: Number,
        },
        realCustomerStrategy: {
            type: String,
        },
        marketingDepartment: {
            type: Boolean,
        },
        marketingObjectives: {
            type: String,
        },
        webUX: {
            type: Boolean,
        },
        webTeam: {
            type: Boolean,
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

//Export Interface IHealth
export interface IHealth extends Document {
    uid: string;
    carousel: boolean;
    shortVideos: boolean;
    longVideos: boolean;
    automation: boolean;
    adsBudget: boolean;
    kpis: boolean;
    realCustomersCanal: string;
    realCustomersPercentage: number;
    realCustomerStrategy: string;
    marketingDepartment: boolean;
    marketingObjectives: string;
    webUX: boolean;
    webTeam: boolean;
    message: string;
    politiquesAccepted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//Export Health Model
export const HealthModel = model<IHealth>('Health', healthSchema);
