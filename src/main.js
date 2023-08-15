// import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/global.css'

const app = createApp(App)

app.use(router);
app.use(ref);

app.mount('#app')
