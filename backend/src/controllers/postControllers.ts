//Import tools
import { Request, Response } from 'express';
import { PostModel, IPost } from '../models/PostModel';

// Get All Posts --> Line 16
// Get One Post --> Line 32
// Create  Post --> Line 48
// Update  Post --> Line 71
// Delete  Post --> Line 94

// Get All Posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts: IPost[] = await PostModel.find();

        return res.status(200).json({ posts });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Post
export const getOnePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post: IPost | null = await PostModel.findById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({ post });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Create Post
export const createPost = async (req: Request, res: Response) => {
    try {
        const {
            title,
            content,
            brief,
            author,
            imageId,
            imageUrl,
            category,
            video,
        } = req.body;

        const post: IPost = new PostModel({
            title,
            content,
            brief,
            author,
            imageId,
            imageUrl,
            category,
            video,
        });

        await post.save();

        return res.status(201).json({ post });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Post
export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const post: IPost | null = await PostModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({ post });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete Post
export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const post: IPost | null = await PostModel.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({ post });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
