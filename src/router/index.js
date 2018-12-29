import Vue from 'vue'
import Router from 'vue-router'
import vmain from '@/components/main'
import vinfo from '@/components/setup/info'
import vdefult from "@/components/setup/defult"
import vaddtext from "@/components/subsetup/addtext"
import vtableinfo from "@/components/tableview/tableinfo"
import vtableexend from "@/components/tableview/tableexend"
import vtabledefult from "@/components/tableview/tabledefult"
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: 'vlogin'
    },
    {
      path: '/vlogin',
      name: 'vlogin',
      component: resolve => require(['@/components/login'], resolve)
    },
    {
      path: '/vmain',
      component: resolve => require(['@/components/main'], resolve),
      children: [{
          path: '/',
          name: 'vdefult',
          component: vdefult
        },
        {
          path: 'vinfo',
          name: 'vinfo',
          component: vinfo
        },
        {
          path: 'vpass',
          name: 'vpass',
          component: resolve => require(['@/components/setup/pass'], resolve)
        },
        {
          path: 'vsafety',
          name: 'vsafety',
          component: resolve => require(['@/components/setup/safety'], resolve)
        },
        {
          path: 'vcardefult',
          component: resolve => require(['@/components/subsetup/cardefult'], resolve),
          children: [
            {
              path: '/',
              name: 'vcarousel',
              component: resolve => require(['@/components/subsetup/carousel'], resolve),
            },
            {
            path: 'vaddtext',
            name: 'vaddtext',
            component: vaddtext
            }
          ]
        },
        {
          path: 'vtableinfo',
          component: vtableinfo,
          children: [{
              path: '/',
              name: 'vtabledefult',
              component: vtabledefult
            },
            {
              path: 'vtableexend',
              name: 'vtableexend',
              component: vtableexend
            },
          ]
        },
      ]
    }
  ]
})
