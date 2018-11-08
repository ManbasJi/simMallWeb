import router from './router'
import { checkToken, logout } from '@/api/login'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken, removeToken, removeUploadToken } from '@/utils/auth' // 验权
import { removeShopId, removeID } from '@/utils/storage'
const whiteList = ['/category','/home','/login','/register', '/resetpwd'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      checkToken().then(res => {
        next()
      }).catch((err) => {
        logout().then(() => {
          Message.error(err || '已成功退出')
          removeID()
          removeToken()
          removeUploadToken()
          removeShopId()
          next({ path: '/' })
        })
      })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/home')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
