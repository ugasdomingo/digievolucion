//Import tootls
import { Schema, model, Document } from 'mongoose';

//Create Course Schema
const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            requiered: true,
        },
        brief: {
            type: String,
            requiered: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageId: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        video: {
            type: String,
        },
        paypal: {
            type: String,
            requiered: true,
        },
    },
    { timestamps: true }
);

//Export Interface ICourse
export interface ICourse extends Document {
    name: string;
    description: string;
    brief: string;
    price: number;
    imageId: string;
    imageUrl: string;
    category: string;
    stock: number;
    video: string;
    paypal: string;
    createdAt: Date;
    updatedAt: Date;
}

//Export Course Model
export const CourseModel = model<ICourse>('Course', courseSchema);
