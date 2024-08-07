import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// Import the FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import the FontAwesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


// Add the icons to the library
library.add(fas);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeButton: true,
  }).mount('#app')
