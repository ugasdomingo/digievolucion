//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/axios';
import { useUserStore } from './user-store';
import { ICourse } from '../interfaces/ICourse';

//Define the store
export const useCourseStore = defineStore('course', () => {
    const userStore = useUserStore();

    const allCourses = ref<ICourse[]>([]);
    const course = ref<ICourse>({} as ICourse);

    const createCourse = async (course: Object) => {
        try {
            const response = await api({
                method: 'post',
                url: '/courses',
                data: course,
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCourses = async () => {
        try {
            const response = await api({
                method: 'get',
                url: '/courses',
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            allCourses.value = response.data.courses;
        } catch (error) {
            console.log(error);
        }
    };

    const getCourseById = async (id: string) => {
        try {
            const response = await api({
                method: 'get',
                url: `/courses/${id}`,
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            course.value = response.data.course;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        allCourses,
        course,
        createCourse,
        getAllCourses,
        getCourseById
    };
});
