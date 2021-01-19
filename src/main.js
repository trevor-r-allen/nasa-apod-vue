import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import corejs from 'core-js'
import popper from 'popper.js'

const root = createApp(App)
root.use(jquery, bootstrap, popper, corejs).mount('#app')
