import lottie from 'lottie-web'
import animationData from './loading.json'
let Loading = {}
// 避免重复install，设立flag
Loading.installed = false
Loading.install = function(Vue) {
  if (Loading.installed) return

  Vue.prototype.$loading = {}
  Vue.prototype.$loading.show = () => {
    // 如果页面有loading则不继续执行
    if (document.querySelector('#zw-loading')) return
    // 1、创建构造器，定义loading模板
    let LoadingTip = Vue.extend({
      template: `<div id="zw-loading">
                  <div class="loader"></div>
                </div>`
    })
    // 2、创建实例，挂载到文档以后的地方
    let tpl = new LoadingTip().$mount().$el
    // 3、把创建的实例添加到body中
    document.body.appendChild(tpl)
    lottie.loadAnimation({
      container: document.querySelector('.loader'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
    // 阻止遮罩滑动
    document.querySelector('#zw-loading').addEventListener('touchmove', function(e) {
      e.stopPropagation()
      e.preventDefault()
    })
    Loading.installed = true
  }
  Vue.prototype.$loading.hide = () => {
    let tpl = document.querySelector('#zw-loading')
    document.body.removeChild(tpl)
  }
}
export default Loading
