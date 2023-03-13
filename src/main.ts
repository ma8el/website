import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXingSquare, faLinkedin, faGithubSquare, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { createPinia } from 'pinia'

library.add(faXingSquare, faLinkedin, faGithubSquare, faBlogger)

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify).use(pinia).mount('#app')
