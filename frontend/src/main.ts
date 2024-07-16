import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes/router.ts';
import CKEditor from '@ckeditor/ckeditor5-vue';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(CKEditor);
app.mount('#app');
