import { createRouter, createWebHistory } from 'vue-router'
import Whiteboard from '../views/WhiteBoard.vue'

const routes = [
  {
    path: '/',
    redirect: '/board/default', // 默认跳转到一个默认白板
  },
  {
    path: '/board/:id', // 动态路由参数 :id
    name: 'Board',
    component: Whiteboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
