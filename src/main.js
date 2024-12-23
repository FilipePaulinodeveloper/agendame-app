import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';
// Composables
import { createApp } from 'vue'

const app = createApp(App)

app
.use(router)
.use(vuetify)
.mount('#app')
