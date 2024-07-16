<script setup lang="ts">
//Import tools
import { useUserStore } from '../stores/user-store';
import { useUtilsStore } from '../stores/utils-store';

//Activate store
const userStore = useUserStore();
const utilStore = useUtilsStore();

const paths = [
    { name: 'Servicios', path: '/servicios' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Escritorio', path: '/escritorio' }
];

const logout = () => {
    userStore.logout();
};
</script>

<template>
    <nav>
        <ul>
            <li
                v-for="path in paths"
                :key="path.name"
                @click="utilStore.showMenu = false"
            >
                <RouterLink :to="path.path">{{ path.name }}</RouterLink>
            </li>
            <li v-if="userStore.token" @click="utilStore.showMenu = false">
                <RouterLink to="/" class="last-btn" @click="logout"
                    >Cerrar Sesión</RouterLink
                >
            </li>
            <li v-else @click="utilStore.showMenu = false">
                <RouterLink to="/salud-de-marca" class="last-btn"
                    >Salud de tu Marca</RouterLink
                >
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

@media screen and (max-width: 768px) {
    nav {
        position: fixed;
        top: 5rem;
        right: 0;
        width: fit-content;
        height: fit-content;
        padding: 2rem 1rem;
        margin: 0;
        border-radius: 1rem 0 0 1rem;
        background-color: var(--color-primary);
        gap: 2.5rem;
        flex-direction: column;
        z-index: 1000;

        ul {
            flex-direction: column;
            gap: 1rem;
        }

        li {
            font-size: 2rem;
        }
    }

    .last-btn {
        margin-top: 5rem;
    }
}
</style>
