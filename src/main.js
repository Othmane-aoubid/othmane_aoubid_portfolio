import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App).use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeButton: true,
  }).mount('#app')
