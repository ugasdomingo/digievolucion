<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { useCourseStore } from '../stores/course-store';

//Use tools
const coursesStore = useCourseStore();

//Lifecycle hooks
onBeforeMount(() => {
    coursesStore.getAllCourses();
    console.log(coursesStore.allCourses);
});
</script>

<template>
    <main>
        <img
            class="background"
            src="https://img.freepik.com/free-photo/crop-woman-using-laptop-dark-room_23-2147802042.jpg?t=st=1721130742~exp=1721134342~hmac=9546382348e4d44c0036e1c89ef7361662877c537a4e4cc7233cf7c37403d63f&w=740"
            alt="background home"
        />
        <RouterLink
            v-for="course in coursesStore.allCourses"
            :key="course._id"
            :to="'cursos/' + course._id"
        >
            <img :src="course.imageUrl" :alt="course.name" class="cover" />
        </RouterLink>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding: 4rem;
    box-sizing: border-box;
    position: relative;

    .cover {
        width: 100%;
        max-width: 350px;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        cursor: pointer;
    }

    a {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
}
</style>
