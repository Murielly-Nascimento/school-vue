import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './jquery';
import './ajax';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon, initFontawesome } from './fontawesome'

const pinia = createPinia()
const app = createApp(App)

initFontawesome();

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_URL;
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(pinia)

app.mount('#app')


  