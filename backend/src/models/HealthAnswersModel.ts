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
            required: true,
        },
        shortVideos: {
            type: Boolean,
            required: true,
        },
        longVideos: {
            type: Boolean,
            required: true,
        },
        automation: {
            type: Boolean,
            required: true,
        },
        adsBudget: {
            type: Boolean,
            required: true,
        },
        kpis: {
            type: Boolean,
            required: true,
        },
        realCustomersCanal: {
            type: String,
        },
        realCustomersPercentage: {
            type: Number,
            required: true,
        },
        realCustomerStrategy: {
            type: String,
        },
        marketingDepartment: {
            type: Boolean,
            required: true,
        },
        marketingObjectives: {
            type: String,
        },
        webUX: {
            type: Boolean,
            required: true,
        },
        webTeam: {
            type: Boolean,
            required: true,
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
