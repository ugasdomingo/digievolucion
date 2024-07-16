<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { useCourseStore } from '../stores/course-store';
import { useRoute } from 'vue-router';

//Use tools
const coursesStore = useCourseStore();
const route = useRoute();

//Funtions
const showStock = (stock: number) => {
    if (stock > 0) {
        return stock.toString();
    } else if (stock === 0) {
        return 'No disponible';
    } else {
        return 'Disponibles';
    }
};

//Lifecycle hooks
onBeforeMount(() => {
    coursesStore.getCourseById(route.params.id);
    console.log(coursesStore.allCourses);
});
</script>

<template>
    <main>
        <img
            class="background"
            src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="background home"
        />
        <section class="left-content" v-if="coursesStore.course">
            <h2>{{ coursesStore.course.name }}</h2>
            <p v-html="coursesStore.course.description"></p>
        </section>
        <section class="right-content">
            <img
                :src="coursesStore.course.imageUrl"
                :alt="coursesStore.course.name"
            />
            <ul>
                <li>
                    <span>Precio: </span>€{{ coursesStore.course.price }},00
                </li>
                <li>
                    <span>Categoría: </span>{{ coursesStore.course.category }}
                </li>
                <li>
                    <span>Cupos: </span
                    >{{ showStock(coursesStore.course.stock) }}
                </li>
            </ul>
            <a :href="coursesStore.course.paypal">Hacer curso</a>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4rem;
    font-family: 'Nunito';
    box-sizing: border-box;
    position: relative;

    .left-content {
        width: 65%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: var(--color-white);
    }

    .right-content {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: fixed;
        right: 4rem;
        top: 6rem;

        img {
            width: 70%;
            height: fit-content;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0.5rem 0.25rem 1rem rgba(255, 255, 255, 0.5);
            align-self: center;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                justify-content: space-between;
                font-size: 1.25rem;
                font-weight: 300;
            }
        }

        a {
            width: 100%;
            padding: 1rem;
            background-color: var(--color-accent);
            color: var(--color-white);
            text-align: center;
            text-decoration: none;
            font-size: 1.75rem;
            border-radius: 1rem;
        }
    }
}
</style>
