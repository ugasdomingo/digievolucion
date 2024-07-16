<script setup lang="ts">
//Import tools
import { useCourseStore } from '../../stores/course-store';
import { useRouter } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { CKEditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Import components
import LoadingComponent from '../LoadingComponent.vue';

//Use tools
const courseStore = useCourseStore();
const router = useRouter();
const loading = ref(false);
const editor = ClassicEditor;

//Data
const name = ref('');
const description = ref('');
const brief = ref('');
const price = ref(0);
const imageUrl = ref('');
const category = ref('');
const stock = ref(0);
const video = ref('');
const paypal = ref('');

//define funtions
const handleSubmit = async () => {
    try {
        loading.value = true;
        await courseStore.createCourse({
            name: name.value,
            description: description.value,
            brief: brief.value,
            price: price.value,
            imageUrl: imageUrl.value,
            category: category.value,
            stock: stock.value,
            video: video.value,
            paypal: paypal.value
        });
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <section class="form-container">
        <h1>Agergar Curso</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="name" placeholder="Name" />
            <ckeditor :editor="editor" v-model="description" />
            <input type="text" v-model="brief" placeholder="Brief" />
            <input type="number" v-model="price" placeholder="Price" />
            <input type="text" v-model="imageUrl" placeholder="Image URL" />
            <input type="text" v-model="category" placeholder="Category" />
            <input type="number" v-model="stock" placeholder="Stock" />
            <input type="text" v-model="video" placeholder="Video URL" />
            <input type="text" v-model="paypal" placeholder="Paypal" />
            <button class="submit" type="submit">Agregar</button>
        </form>
        <loading-component v-if="loading" class="loading" />
    </section>
</template>

<style scoped lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: 6rem 4rem 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        input {
            width: 80%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .submit {
            width: 50%;
            margin: 10px 0;
            color: white;
            cursor: pointer;
        }

        .ck-editor__editable {
            min-height: 200px;
            width: 100%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid var(--color-accent);
            border-radius: 5px;
        }
    }
}
.loading {
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
</style>
