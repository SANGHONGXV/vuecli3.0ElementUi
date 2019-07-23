import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.axios = axios;
Vue.config.productionTip = false


const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app;