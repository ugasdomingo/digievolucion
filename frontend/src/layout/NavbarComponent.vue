<script setup lang="ts">
//Import tools
import { useUserStore } from '../stores/user-store';

//Activate store
const userStore = useUserStore();

const paths = [
    { name: 'Servicios', path: '/servicios' },
    { name: 'Conocenos', path: '/conocenos' },
    { name: 'Escritorio', path: '/escritorio' }
];

const logout = () => {
    userStore.logout();
};
</script>

<template>
    <nav>
        <ul>
            <li v-for="path in paths" :key="path.name">
                <RouterLink :to="path.path">{{ path.name }}</RouterLink>
            </li>
            <li v-if="userStore.token">
                <RouterLink to="/" class="last-btn" @click="logout">Cerrar Sesión</RouterLink>
            </li>
            <li v-else>
                <RouterLink to="/salud-de-marca" class="last-btn">Salud de tu Marca</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0;
        padding: 0;

        li {
            font-size: 1.25rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                color: var(--color-accent);
            }

            a {
                text-decoration: none;
                color: var(--color-white);

                &:hover {
                    color: var(--color-accent);
                }
            }
        }
    }
}

.last-btn {
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--color-accent);
    color: var(--color-white);
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--color-tertiary);
        color: var(--color-white);
    }
}
</style>
