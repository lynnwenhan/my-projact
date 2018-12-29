// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(iView)

Vue.prototype.$ajax = axios

//??????
import global_ from './router/Base.vue'
Vue.prototype.GLOBAL=global_;
axios.defaults.baseURL=global_.BASE_URL


Vue.config.productionTip = false
// ????
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
