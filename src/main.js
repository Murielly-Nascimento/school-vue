import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { FontAwesomeIcon, initFontawesome } from './fontawesome'

const app = createApp(App)

initFontawesome();

app.config.globalProperties.$baseUrl = 'http://localhost:3000';
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')


  