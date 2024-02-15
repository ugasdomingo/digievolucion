<script setup lang="ts">
import { useUtilsStore } from '../stores/utils-store';

const utilsStore = useUtilsStore();
</script>

<template>
    <footer>
        <p>Todos los derechos reservados</p>

        <a href="#header" v-if="utilsStore.scroll > 1000">
            <img src="" alt="arriba" />
        </a>
    </footer>
</template>

<style scoped lang="scss">
footer {
    width: 100%;
    height: 5vh;
    box-sizing: border-box;
    background-color: transparent;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    position: absolute;
    bottom: 0;

    p {
        font-size: 1rem;
        font-weight: 300;
        opacity: 0.5;
    }

    a {
        bottom: 0;
        position: absolute;
        right: 4rem;
        transform: translateY(50%);
    }
}
</style>
