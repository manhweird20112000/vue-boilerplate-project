import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import dotenv from 'dotenv';
import { createPinia } from 'pinia';

dotenv.config();

createApp(App).use(createPinia()).mount('#app');
