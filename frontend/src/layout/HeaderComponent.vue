<script setup lang="ts">
//Import tools
import { RouterLink } from 'vue-router';

//Import components
import NavbarComponent from './NavbarComponent.vue';
</script>

<template>
    <header>
        <RouterLink to="/" class="logo">Digiempresas</RouterLink>
        <NavbarComponent />
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

        &:hover {
            color: var(--color-accent);
        }
    }
}
</style>
