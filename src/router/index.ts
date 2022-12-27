import  { createRouter, createWebHashHistory, RouterOptions, Router } from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

const originalPush = Router.prototype.push

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes: constantRouterMap,
}
const router:Router  = createRouter(options)



export default router