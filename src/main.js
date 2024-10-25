import 'quasar/src/css/index.sass'
import './css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { useMainStore } from '@/stores/main.js'

// import PrimeVue from 'primevue/config'
// //primeVue components
// import Button from 'primevue/button'
// import SpeedDial from 'primevue/speeddial'
// import Toast from 'primevue/toast'
// import ToastService from 'primevue/toastservice'

// import Chat from 'vue3-beautiful-chat'

import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css

// Init Pinia
const pinia = createPinia()

// Create Vue app
const app = createApp(App)

app.use(pinia)
// app.use(PrimeVue, {
  //   unstyled: false
  // })
  app.use(Quasar, {
    plugins: {
      Notify
    },
    config: {
      notify: {
        /* look at QuasarConfOptions from the API card */
      }
    }
  })
  app.use(router)

// app.component('SpeedDial', SpeedDial)
// app.component('Button', Button)
// app.component('Toast', Toast)
// app.use(ToastService)
// app.use(Chat)
app.mount('#app')

// Init main store
const mainStore = useMainStore(pinia)

// Fetch sample data
mainStore.fetchSampleClients()
mainStore.fetchSampleHistory()

// Dark mode
// Uncomment, if you'd like to restore persisted darkMode setting, or use `prefers-color-scheme: dark`. Make sure to uncomment localStorage block in src/stores/darkMode.js
// import { useDarkModeStore } from './stores/darkMode'

// const darkModeStore = useDarkModeStore(pinia)

// if (
//   (!localStorage['darkMode'] && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
//   localStorage['darkMode'] === '1'
// ) {
//   darkModeStore.set(true)
// }

// Default title tag
const defaultDocumentTitle = 'Admin One Vue 3 Tailwind'

// Set document title from route meta
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
