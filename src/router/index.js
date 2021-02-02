import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const $import = (file) => () => import(`@/views/${file}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '网上体验馆'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    meta: {
      title: '网上体验馆'
    }
  },
  {
    path: '/qiyan',
    name: 'qiyan',
    component: () => import(/* webpackChunkName: "about" */ '../views/qiyan.vue'),
    meta: {
      title: '前言'
    }
  },
  {
    path: '/historical',
    name: 'Historical',
    component: () => import(/* webpackChunkName: "about" */ '../views/Historical.vue'),
    meta: {
      title: '菜单选择'
    }
  },
  {
    path: '/memorabilia',
    name: 'Memorabilia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Memorabilia.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/honor',
    name: 'honor',
    component: () => import(/* webpackChunkName: "about" */ '../views/honor.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/development',
    name: 'development',
    component: () => import(/* webpackChunkName: "about" */ '../views/development.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/famemorabilia',
    name: 'famemorabilia',
    component: () => import(/* webpackChunkName: "about" */ '../views/faMemorabilia.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/fahonor',
    name: 'fahonor',
    component: () => import(/* webpackChunkName: "about" */ '../views/fahonor.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/san',
    name: 'san',
    component: () => import(/* webpackChunkName: "about" */ '../views/san.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/weilaicontent',
    name: 'weilaicontent',
    component: () => import(/* webpackChunkName: "about" */ '../views/weilaicontent.vue'),
    meta: {
      title: ''
    }
  },
  // {
  //   path: '/xiangqing',
  //   name: 'xiangqing',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/xiangqing.vue'),
  //   meta: {
  //     title: '导航页面'
  //   }
  // },
  {
    path: '/main',
    name: 'main',
    meta: {
      title: '主界面'
    },
    component: $import('main/index')
  },
  {
    path: '/preface',
    name: 'preface',
    meta: {
      title: '前言'
    },
    component: $import('preface/index')
  },

  {
    path: '/mascot',
    name: 'mascot',
    meta: {
      title: '选择吉祥物'
    },
    component: $import('mascot/index')
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    meta: {
      title: '主界面'
    },
    component: $import('home/index')
  },

  {
    path: '/move',
    name: 'Move',
    meta: {
      title: '中间过场'
    },
    component: $import('move/index')
  },
  // {
  //   path: '/mechanism',
  //   name: 'mechanism',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/mechanism.vue'),
  //   meta: {
  //     title: '建设发展'
  //   }
  // },
  // {
  //   path: '/building',
  //   name: 'building',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/building.vue'),
  //   meta: {
  //     title: '队伍建设'
  //   }
  // },
  // {
  //   path: '/neirong',
  //   name: 'neirong',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/neirong.vue'),
  //   meta: {
  //     title: '文章详情'
  //   }
  // },
  // {
  //   path: '/Memorabilia1',
  //   name: 'Memorabilia1',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Memorabilia1.vue'),
  //   meta: {
  //     title: '文章详情'
  //   }
  // },
  {
    path: '/industrial',
    name: 'industrial',
    component: () => import(/* webpackChunkName: "about" */ '../views/industrial.vue'),
    meta: {
      title: '产业'
    }
  }
]

const router = new VueRouter({
  mode: 'history',   // 模式，默认hash
  // mode: 'hash',
  base: '/', // 基础路径
  routes
})

export default router
