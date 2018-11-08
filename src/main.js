import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import '@/styles/animate.css'
// import '@/styles/style.css'

import App from './App'
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import { authTable } from '@/utils/permission'
import global_ from './common/global'
import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_ //挂载到vue实例上面

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

if (getToken()) {
  authTable()
}
