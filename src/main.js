import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import AppDate from '@/components/AppDate'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)
Vue.component('AppDate', AppDate)
Vue.config.productionTip = false
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_API_ID
}
firebase.initializeApp(config)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
