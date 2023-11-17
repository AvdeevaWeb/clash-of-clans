import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/scss/main.scss'
import '@/components/_config'
import routers from './routers'

const  app = createApp(App)
app.use(routers)

app.mount('#app')
