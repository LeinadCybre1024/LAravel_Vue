import { createApp } from 'vue';
import App from './components/app.vue';

// Importing Bootstrap and Popper.js is not necessary for Vue 3

const app = createApp(App);

app.mount('#app');