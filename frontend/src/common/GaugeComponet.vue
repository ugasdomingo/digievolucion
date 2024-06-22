<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    value: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="progress-bar">
        <div
            class="progress-bar__value"
            :class="type"
            :style="{
                width: `${value}%`,
                backgroundColor:
                    type === 'bad'
                        ? 'red'
                        : type === 'regular'
                        ? 'yellow'
                        : 'green'
            }"
        ></div>
    </div>
</template>

<style scoped lang="scss">
.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
    border-radius: 10px;
    margin-top: 1rem;
    .progress-bar__value {
        height: 100%;
        border-radius: 10px;
    }
}
</style>
