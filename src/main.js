import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import dotenv from 'dotenv';
import App from './App.vue';
import './index.css';

dotenv.config();

const app = createApp(App);
app.use(createPinia());
app.use(VueAxios, axios);
app.mount('#app');
