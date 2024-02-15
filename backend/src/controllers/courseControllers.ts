//Import tools
import { Request, Response } from 'express';
import { CourseModel, ICourse } from '../models/CourseModel';
import { deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// Get All Courses --> Line 16
// Get One Course --> Line 32
// Create  Course --> Line 48
// Update  Course --> Line 71
// Delete  Course --> Line 94

// Get All Courses
export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses: ICourse[] = await CourseModel.find();
        return res.status(200).json({ courses });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Course
export const getOneCourse = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const course: ICourse | null = await CourseModel.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({ course });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Create Course
export const createCourse = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            brief,
            price,
            imageId,
            imageUrl,
            category,
            stock,
            video,
            paypal,
        } = req.body;

        const course: ICourse = new CourseModel({
            name,
            description,
            brief,
            price,
            imageId,
            imageUrl,
            category,
            stock,
            video,
            paypal,
        });

        await course.save();

        return res.status(200).json({ course });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Course
export const updateCourse = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const course: ICourse | null = await CourseModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        return res.status(200).json({ course });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete Course
export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const course: ICourse | null = await CourseModel.findByIdAndDelete(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Delete image from cloudinary
        await deleteImage(course.imageId);

        return res.status(200).json({ message: 'Course deleted' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
