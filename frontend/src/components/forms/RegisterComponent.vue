<script setup lang="ts">
//Import tools
import { useUserStore } from '../../stores/user-store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

//Import components
import LoadingComponent from '../LoadingComponent.vue';

//Define variables
const userStore = useUserStore();
const router = useRouter();
const loading = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');

//Define functions
const register = async () => {
    try {
        loading.value = true;
        await userStore.register(name.value, email.value, password.value, 'user');

        name.value = '';
        email.value = '';
        password.value = '';

        router.push('/escritorio');
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <form class="register-form">
        <input type="text" placeholder="Nombre" v-model="name" />
        <input type="text" placeholder="Correo Electrónico" v-model="email" />
        <input type="password" placeholder="Contraseña" v-model="password" />
        <LoadingComponent v-if="loading" />
        <button @click="register" :disabled="loading" v-else>
            <span>Crear Cuenta</span>
        </button>
    </form>
</template>

<style scoped lang="scss">
.register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

    input {
        width: 80%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--color-white);
        border-radius: 5px;
        font-size: 1.25rem;
    }

    button {
        width: 50%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        letter-spacing: 0.2rem;
        color: var(--color-white);
        background-color: var(--color-accent);
        margin: 1rem 0;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
        }

        span {
            font-weight: bold;
        }

        &:hover {
            background-color: var(--color-white);
            color: var(--color-primary);
        }
    }
}
</style>
