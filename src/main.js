import { createApp } from 'vue'

import App from '@/App.vue'
import BaseContainer from '@/components/shared/BaseContainer.vue';


import '@/style.css'

const app = createApp(App);

app.component('BaseContainer', BaseContainer);

app.mount('#app')
