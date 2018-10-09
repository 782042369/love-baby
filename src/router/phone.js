import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading
let _import = process.env.NODE_ENV === 'development' ? file => require('@/views/' + file + '.vue').default : file => () =>
  import('@/views/' + file + '.vue')
// console.log(process.env.NODE_ENV)

Vue.use(Router)

let routeList = [{
  path: '*',
  redirect: '/'
}, // 首页
{
  path: '/',
  name: 'index',
  titleL: '开发',
  component: _import('phone/index/home')
}
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routeList
})
