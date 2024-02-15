//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Quote Schema
const quoteSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        services: {
            type: String,
            required: true,
            trim: true,
        },
        enterprise: {
            type: String,
            required: true,
        },
        enterpriseURL: {
            type: String,
        },
        dateTime: {
            type: Date,
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

//Export Interface IQuote
export interface IQuote extends Document {
    uid: string;
    services: string;
    enterprise: string;
    enterpriseURL: string;
    dateTime: Date;
    message: string;
    politiquesAccepted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//Export Quote Model
export const QuoteModel = model<IQuote>('Quote', quoteSchema);
