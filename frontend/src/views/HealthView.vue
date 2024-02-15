<script setup lang="ts">
import HealthFormComponent from '../components/forms/HealthFormComponent.vue';
</script>

<template>
    <main>
        <h1>Descubre el estado de salud de tu marca</h1>
        <p>
            Completa este sencillo formulario y consulta el resultado en tu
            escritorio privado.
        </p>

        <HealthFormComponent />
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 5rem 4rem 3rem;
}
</style>
