import './assets/main.css'
import './assets/base.css'
import './views/Calc.vue'

import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
