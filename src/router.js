import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Overview from '@/components/overview.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

let routes= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-orange',//图标样式class
      leaf: true,//只有一个节点
      children: [
          { path: '/overview', component: Overview, name: '概览'},
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      children: [
          { path: '/helloWorld', component: HelloWorld, name: 'HelloWorld'},
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})

export default routes;