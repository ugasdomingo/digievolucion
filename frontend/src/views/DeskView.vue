<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { useHealtStore } from '../stores/healt-store';
//Import components

const healtStore = useHealtStore();

onBeforeMount(() => {
    healtStore.getUserHealtByUser();
});
</script>

<template>
    <h1>Desk</h1>
</template>

<style scoped lang="scss"></style>
