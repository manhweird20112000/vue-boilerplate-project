import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import dotenv from 'dotenv';
import App from './App.vue';

import './index.css';
import router from './app/routes';

dotenv.config();

const app = createApp(App);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
