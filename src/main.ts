import { createApp } from 'vue'
import antDesignVue from './plugins/antDesignVue'
import './style.css'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

app.use(antDesignVue).use(router).mount('#app')
