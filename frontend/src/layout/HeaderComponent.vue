<script setup lang="ts">
//Import tools
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

//Import components
import NavbarComponent from './NavbarComponent.vue';

const showMenu = ref(false);
</script>

<template>
    <header>
        <RouterLink to="/" class="logo">
            <img
                src="/images/logo-imagen.png"
                alt="logo-digiempresas"
                class="logo-img"
            />
            igiempresas
        </RouterLink>
        <img
            src="../assets/icon-hamburguer-menu.svg"
            alt="menu"
            class="responsive-menu"
            @click="showMenu = !showMenu"
        />
        <NavbarComponent v-if="showMenu" />
        <NavbarComponent class="navbar" />
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 10vh;
    box-sizing: border-box;
    background-color: transparent;
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    position: absolute;
    top: 0;
    border-bottom: 1px solid var(--color-white);
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.5);
    z-index: 1000;

    .logo {
        font-family: 'Neoteric';
        font-size: 3rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        color: var(--color-white);
        text-decoration: none;
        display: flex;
        align-items: center;

        &:hover {
            color: var(--color-accent);
        }

        .logo-img {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
            margin-right: 0.2rem;
        }
    }

    .responsive-menu {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        display: none;
    }
}

@media screen and (max-width: 768px) {
    header {
        padding: 0 2rem;

        .responsive-menu {
            display: block;
        }

        .navbar {
            display: none;
        }

        .logo {
            font-size: 2rem;
        }
    }
}
</style>
