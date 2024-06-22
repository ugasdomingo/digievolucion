<script setup lang="ts">
//Import tools
import { ref } from 'vue';

//Import components
import LoginComponent from '../components/forms/LoginComponent.vue';
import RegisterComponent from '../components/forms/RegisterComponent.vue';

//Define variables
const isUser = ref(true);
</script>

<template>
    <main>
        <h1>Bienvenidos</h1>
        <LoginComponent v-if="isUser" />
        <RegisterComponent v-else />
        <section v-if="isUser">
            <p>¿No tienes una cuenta?</p>
            <button @click="isUser = false">Crear cuenta</button>
        </section>
        <section v-else>
            <p>¿Ya tienes cuenta?</p>
            <button @click="isUser = true">Iniciar Sesión</button>
        </section>
        <img
            src="images/fondo-8.jpg"
            alt="background-tech"
            class="background"
        />
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 5rem 4rem 0;
    box-sizing: border-box;

    h1 {
        text-align: left;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 60%;
        margin-top: 2rem;

        p {
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        button {
            padding: 10px;
            border-radius: 5px;
            width: fit-content;
            font-size: 1rem;
            color: var(--color-white);
            background-color: transparent;
            border: 1px solid var(--color-white);

            &:hover {
                background-color: var(--color-white);
                color: var(--color-primary);
            }
        }
    }
    .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
}

@media screen and (max-width: 768px) {
    main {
        padding: 4rem 2rem;
    }

    section {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
