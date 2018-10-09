import Vue from 'vue'
import '@/styles/pc/index.scss' // pc css
import App from './App'
import router from '@/router/pc'
import filters from '@/utils/filters'
import '@/components/componentRegister'
import loading from '@/components/loading/loading'
import 'vant/lib/vant-css/index.css'
for (let key in filters) {
  Vue.filter(key, filters[key])
}
console.log(1)
Vue.use(loading)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
