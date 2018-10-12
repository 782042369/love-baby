import Vue from 'vue'
import '@/styles/phone/index.scss' // 移动站 css
import App from './App'
import router from '@/router/phone'
import 'lib-flexible/flexible.js'
import Vant from 'vant'
import filters from '@/utils/filters'
import '@/components/componentRegister'
import loading from '@/components/loading/loading'
import 'vant/lib/vant-css/index.css'
import api from '@/api'
for (let key in filters) {
  Vue.filter(key, filters[key])
}
Vue.prototype.$api = api
Vue.use(Vant)
Vue.use(loading)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
