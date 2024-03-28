import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'

import globalVars from './global-vars.ts'


const app = createApp(App)

app.use(globalVars, {
    MyUrl: 'http://localhost:8000'
});

app.use(router)

app.mount('#app')
