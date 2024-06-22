//Import tools
import { defineStore } from 'pinia';
import { api } from '../services/axios';
import { ref } from 'vue';

//Define store
export const useUserStore = defineStore('user', () => {
    const token = ref(null);
    const userRole = ref('');
    const userName = ref('');

    //Define actions
    const access = async (email: string, password: string) => {
        try {
            const res = await api.post('/login', {
                email,
                password
            });

            token.value = res.data.response.token;
            userRole.value = res.data.response.role;
            userName.value = res.data.response.name;

            localStorage.setItem('user', res.data.response.role);
            localStorage.setItem('token', res.data.response.refreshToken);

            setTime();
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (
        name: string,
        email: string,
        password: string,
        role: string
    ) => {
        try {
            const res = await api.post('/register', {
                name,
                email,
                password,
                role
            });

            token.value = res.data.response.token;
            userRole.value = res.data.response.role;
            userName.value = res.data.response.name;

            localStorage.setItem('user', res.data.response.role);
            localStorage.setItem('token', res.data.response.refreshToken);
            setTime();
        } catch (error) {
            console.log(error);
        }
    };

    const refreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem('token');
            const res = await api({
                method: 'post',
                url: '/refresh',
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            });

            token.value = res.data.token;
            userRole.value = res.data.role;
            userName.value = res.data.name;

            localStorage.setItem('user', res.data.role);
            localStorage.setItem('token', res.data.refreshToken);

            setTime();
        } catch (error) {
            console.log(error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    };

    //Define getters

    //Helpers funtions
    const setTime = () => {
        setTimeout(() => {
            console.log('refresh token');
            refreshToken();
        }, 259000 * 1000);
    };

    const logout = async () => {
        try {
            token.value = null;
            userRole.value = '';
            userName.value = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (error) {
            console.log(error);
        }
    };

    return {
        token,
        userRole,
        userName,
        access,
        register,
        refreshToken,
        logout
    };
});
