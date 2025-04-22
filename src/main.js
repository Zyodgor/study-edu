import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createStore  } from 'vuex'

import App from './App.vue'
import router from './router'
import chat from './store/chat';

const store = createStore({
    modules: { chat },
});

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
