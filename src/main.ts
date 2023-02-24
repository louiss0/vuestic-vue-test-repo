import { createApp } from 'vue'
``
import "vuestic-ui/css"
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'

import config from "../vuestic.config";  

createApp(App).use(createVuestic({config})).mount('#app')
