import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Notifications from '@kyvg/vue3-notification';
import VueCookies from 'vue-cookies';
import VueTheMask from 'vue-the-mask';

import App from '@/App.vue';
import router from '@/router';

import { initFontawesome } from '@/fontawesome';

import '@/jquery';
import '@/ajax';
import '@/bootstrap';
import '@/registerServiceWorker';

const pinia = createPinia();
const app = createApp(App);

initFontawesome(app);

// app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_URL;

app.use(router);
app.use(pinia);
app.use(VueCookies, { expires: '1d'});
app.use(Notifications);
app.use(VueTheMask);

app.mount('#app');


  