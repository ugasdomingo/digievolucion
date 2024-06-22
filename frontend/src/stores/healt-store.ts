//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/axios';
import { useUserStore } from './user-store';
import { IHealtResult } from '../interfaces/IHealtResult';

//Define store
export const useHealtStore = defineStore('healt', () => {
    const userStore = useUserStore();

    const allHealtResults = ref<IHealtResult[]>([]);
    const userHealt = ref<IHealtResult>({} as IHealtResult);

    const createHealt = async (healt: Object) => {
        try {
            const response = await api({
                method: 'post',
                url: '/health',
                data: healt,
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getUserHealtByUser = async () => {
        try {
            const response = await api({
                method: 'get',
                url: '/healthResult/user',
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            userHealt.value = response.data.healthResult;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        allHealtResults,
        userHealt,
        createHealt,
        getUserHealtByUser
    };
});
