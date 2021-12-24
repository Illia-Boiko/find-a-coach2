import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'
import { globalComponents } from './components/ui'

const app = createApp(App)

globalComponents.forEach(cmp => {
  app.component(cmp.name, cmp)
})

app
  .use(store)
  .use(router)
  .mount('#app')
