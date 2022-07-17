import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './styles/app.css'
import store from './store'
import icon from './icons'
icon()
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { appAxios } from '@/utils/appAxios'

import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
