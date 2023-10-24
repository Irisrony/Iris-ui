import { createApp } from 'vue'
import './style.css'
import './assets/icons/iconfont.css'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router as any).mount('#app')
