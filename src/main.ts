import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import PrimeButton from 'primevue/button';

import App from './App.vue'
const app = createApp(App)
    .use(PrimeVue)

app.component("PrimeButton", PrimeButton)

    app.mount('#app')
