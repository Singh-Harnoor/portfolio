
import './styles/global.css' // ← Add this line
import { createApp } from 'vue';
import App from './App.vue';
import Particles from 'vue3-particles';

const app = createApp(App);
app.use(Particles);
app.mount('#app');

