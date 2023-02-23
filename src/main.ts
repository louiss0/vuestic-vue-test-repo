import { createApp } from 'vue'
``
import "vuestic-ui/css"
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
createApp(App).use(createVuestic()).mount('#app')
