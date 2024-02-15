//Import tools
import { Schema, model, Document } from 'mongoose';

//Create Post Schema
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            requiered: true,
        },
        brief: {
            type: String,
            requiered: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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
        video: {
            type: String,
        },
    },
    { timestamps: true }
);

//Export Interface IPost
export interface IPost extends Document {
    title: string;
    content: string;
    brief: string;
    author: string;
    imageId: string;
    imageUrl: string;
    category: string;
    video: string;
    createdAt: Date;
    updatedAt: Date;
}

//Export Post Model
export const PostModel = model<IPost>('Post', postSchema);
