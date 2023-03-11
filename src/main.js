import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//Vuex
import store from './store/Store'

createApp(App).use(store).mount('#app')
